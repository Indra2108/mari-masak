import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native';

// Import styles
import styles from "./styles";

// Import image
import lup from './assets/search.png';

export default Search = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([])

    // const SearchQuery = () => {
    //     fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${query}`)
    //         .then(response => response.json())
    //         .then(respon => {
    //             console.log(respon.results);
    //             setData(respon.results);
    //         })
    // }

    // useEffect(() => {
    //     console.log('==> Fetching Query')
    //     SearchQuery()
    // })

    const ReceiptCard = () => {
        return data.map((value, index) =>
            <View style={styles.backgroundArticleCard} key={index}>
                <TouchableOpacity onPress={() => navigation.navigate('Content', { key: value.key })}>
                    <Image source={{ uri: value.thumb }} style={styles.imageArticleCard} />
                    {/* {console.log('==> DATA IMAGE: ' + JSON.stringify(value.thumb))} */}
                    <Text style={styles.titleArticleCard}>{value.title}</Text>
                    <View style={styles.backgroundInfoArticleCard}>
                        <Text style={styles.infoArticleCard}>{value.times}</Text>
                        <Text style={styles.infoArticleCard}>{value.portion}</Text>
                        <Text style={styles.infoArticleCard}>{value.dificulty}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backgroundSearch}>
                <Image source={lup} style={styles.lups} />
                <TextInput
                    placeholder='Search'
                    style={styles.textSearch}
                    onChangeText={query => setQuery(query)}
                />

            </TouchableOpacity>
        </View>
    )
}