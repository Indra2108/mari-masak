import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native';

// Import styles
import styles from "./styles";

// Import image
import lup from './assets/search.png';

export default Search = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    let [startfetch, setStartfetch] = useState(null);


    const SearchQuery = async () => {
        let mengquery = await query
        fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${mengquery}`)
            .then(response => response.json())
            .then(respon => {
                console.log(respon.results);
                setData(respon.results);
            })
            .catch(e => console.log(e))

    }

    useEffect(() => {
        if (query) {

            // setTimeout(() => {
            SearchQuery()
            console.log('==> Fetching query...')
            // }, 2500)

        } else if (query === '') {

            console.log('==> Fetching stopped')
        }

        return () => setData([])
    }, [query])

    // const Mengcondition = () => {
    //     if (query) {
    //         // startfetch(true)
    //         return <ReceiptCard />
    //     } else {
    //         setStartfetch(false)
    //     }
    // }

    const ReceiptCard = () => {
        return data.map((value, index) =>
            <View style={styles.backgroundArticleCard} key={index}>
                <TouchableOpacity onPress={() => navigation.navigate('Content', { key: value.key })}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Content')}> */}

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
        )
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
                // onChangeText={query => setTimeout(() => setQuery(query), 5000)}

                />

                {console.log('==> Query: ' + typeof (query))}
            </View>
            <ScrollView>
                {/* <Mengcondition /> */}
                {console.log('==> empty? ' + !data.length)}
                {!data.length ? null : <ReceiptCard />}
            </ScrollView>
        </View>
    )
}