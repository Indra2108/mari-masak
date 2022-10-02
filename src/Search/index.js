import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from 'react-native';

// Import styles
import styles from "./styles";

// Import image
import lup from './assets/search.png';

//import 3rd party library
import LottieView from 'lottie-react-native';
import { FlashList } from "@shopify/flash-list";

export default Search = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState(Array);
    const [loading, setLoading] = useState(false)

    const SearchQuery = async () => {
        setLoading(true)
        await fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${query}`)
            .then(response => response.json())
            .then(respon => {
                // console.log(respon.results);
                setData(respon.results)
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false))
    }

    const ReceiptCard = () => {

        // if (query.length !== 0) {
        return (
            <FlashList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.backgroundArticleCard}>
                        <TouchableOpacity onPress={() => navigation.navigate('Content', { key: item.key, image: item.thumb })}>
                            <Image source={{ uri: item.thumb }} style={styles.imageArticleCard} />
                            <Text style={styles.titleArticleCard}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                estimatedItemSize={50}
            />
        )
        // }
        // else {
        //     return <View>
        //         {setData([])}
        //         <Text>Data Kosong </Text>
        //     </View>
        // }
    }

    const MengLoading = (props) => {
        const jalur = props.url
        return (
            <View style={styles.containerLottie}>
                <LottieView source={jalur} autoPlay autoSize loop style={styles.lottie} />
                <Text style={styles.textLottie}>Sedang Mencari Resep...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* {console.log('==> render()')} */}
            <View style={styles.backgroundSearch}>
                <Image source={lup} style={styles.lups} />
                <TextInput
                    placeholder='Search'
                    style={styles.textSearch}
                    onChangeText={textQuery => {
                        setQuery(textQuery)
                    }}
                    onEndEditing={() => SearchQuery()}
                    returnKeyType="search"
                />
            </View>


            {!loading && <ReceiptCard />}

            {loading && <MengLoading url={require('../../assets/animations/cariresep.json')} />}

            {(!loading && !query) && <MengLoading url={require('../../assets/animations/masakapahariini?.json')} />}
            {/* {!data.length && <MengLoading />} */}

        </View>
    )
}