import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native';

// Import styles
import styles from "./styles";

// Import image
import lup from './assets/search.png';

export default Search = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const SearchQuery = async () => {
        let mengquery = await query
        await fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${mengquery}`)
            .then(response => response.json())
            .then(respon => {
                console.log(respon.results);

                if (query.length == 0) {
                    setData([])

                } else {
                    setData(respon.results);
                }

            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (query.length !== 0) {

            SearchQuery()
            console.log('==> Fetching query...')

        } else {
            setData([])
            console.log('==> Fetching stopped')
        }

    }, [query])

    const ReceiptCard = () => {

        if (query.length != 0) {
            {
                return data.map((value, index) => (
                    <View style={styles.backgroundArticleCard} key={index}>
                        <TouchableOpacity onPress={() => navigation.navigate('Content', { key: value.key, image: value.thumb })}>

                            <Image source={{ uri: value.thumb }} style={styles.imageArticleCard} />
                            {/* {console.log('==> DATA IMAGE: ' + JSON.stringify(value.thumb))} */}
                            <Text style={styles.titleArticleCard}>{value.title}</Text>
                            {/* <View style={styles.backgroundInfoArticleCard}>
                            <Text style={styles.infoArticleCard}>{value.times}</Text>
                            <Text style={styles.infoArticleCard}>{value.serving}</Text>
                            <Text style={styles.infoArticleCard}>{value.difficulty}</Text>
                        </View> */}

                        </TouchableOpacity>
                    </View>
                ))
            }
        } else {
            return <View><Text>Data Kosong </Text></View>
        }
    }

    return (
        <View style={styles.container}>
            {console.log('==> render()')}
            <View style={styles.backgroundSearch}>
                <Image source={lup} style={styles.lups} />
                <TextInput
                    placeholder='Search'
                    style={styles.textSearch}
                    onChangeText={query => setQuery(query)}
                />

                {console.log('==> Query: ' + query)}
            </View>
            <ScrollView>
                {!data.length ? null : <ReceiptCard />}
            </ScrollView>
        </View>
    )
}