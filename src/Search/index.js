import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, ScrollView } from 'react-native';

// Import styles
import styles from "./styles";

// Import image
import lup from './assets/search.png';

//import 3rd party library
import LottieView from 'lottie-react-native';

export default Search = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState(Array);
    const [loading, setLoading] = useState(false)

    const SearchQuery = async () => {
        setLoading(true)
        await fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${query}`)
            .then(response => response.json())
            .then(respon => {
                console.log(respon.results);
                setData(respon.results)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }

    const ReceiptCard = () => {

        if (query.length !== 0) {
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
            return <View>
                {setData([])}
                <Text>Data Kosong </Text>
                </View>
        }
    }

    const MengLoading = () => {
        return (
            <View style={styles.containerLottie}>
                <LottieView source={require('../../assets/animations/loadingresep.json')} autoPlay autoSize loop style={styles.lottie} />
                <Text style={styles.textLottie}>Sedang Mencari Resep...</Text>
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
                    onChangeText={query => {
                        setQuery(query)
                    }
                    }
                    onEndEditing={() => SearchQuery()}
                    returnKeyType="search"
                    />
            </View>

            
            <ScrollView>
                {!data.length && setLoading ? <MengLoading /> : <ReceiptCard />}
            </ScrollView>

            {/* {setLoading ?  : <ReceiptCard />} */}
        </View>
    )
}