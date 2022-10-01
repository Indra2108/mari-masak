import React, { useEffect, useState, useCallback } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    RefreshControl,
} from 'react-native';

// Import styles for styling
import styles from './styles';

// Import image
import lup from './assets/search.png';
// import pancake from './assets/pancake.jpg';

//import 3rd party library
import LottieView from 'lottie-react-native';
import { FlashList } from "@shopify/flash-list";

export default Home = ({ navigation }) => {
    const [data, setData] = useState(Array)
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        console.log('==> useEffect()')
        FetchingData()
    }, [])

    const onRefresh = useCallback(() => {
        console.log('==> OnRefresh');
        setRefreshing(true);
        FetchingData().finally(() => {
            setRefreshing(false)
            console.log('==> finish refresh')
        });
    }, []);

    const FetchingData = async () => {
        await fetch('https://masak-apa-tomorisakura.vercel.app/api/recipes/')
            .then(response => response.json())
            .then(respon => {
                console.log('==> fetching data...');
                // console.log(respon.results)
                setData(respon.results)
            })
            .catch(e => console.log(e))
    }

    const ReceiptCard = () => {
        return (
            <FlashList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.backgroundArticleCard}>
                        <TouchableOpacity onPress={() => navigation.navigate('Content', { key: item.key, image: item.thumb })}>
                            <Image source={{ uri: item.thumb }} style={styles.imageArticleCard} />
                            <Text style={styles.titleArticleCard}>{item.title}</Text>
                            <View style={styles.backgroundInfoArticleCard}>
                                {item.times && <Text style={styles.infoArticleCard}>{item.times}</Text>}
                                {item.serving && <Text style={styles.infoArticleCard}>{item.serving}</Text>}
                                {item.difficulty && <Text style={styles.infoArticleCard}>{item.difficulty}</Text>}
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                estimatedItemSize={20}
            />
        )
    }

    { console.log('==> Successfully fetching data: ' + data) }

    const MainRender = () => {
        return (
            <View style={styles.container}>

                {console.log('==> render()')}

                <TouchableOpacity style={styles.backgroundSearch} onPress={() => navigation.navigate('Search')}>
                    <Image source={lup} style={styles.lups} />
                    <Text style={styles.textSearch}>Mau nyari resep apa hari ini?</Text>
                </TouchableOpacity>

                <ReceiptCard />

            </View >
        )
    }

    const LoadingDisplay = () => {
        return (
            <View style={styles.containerLottie}>
                <LottieView source={require('../../assets/animations/loadingresep.json')} autoPlay autoSize loop style={styles.lottie} />
                <Text style={styles.textLottie}>Sedang Memuat Resep...</Text>
            </View>
        )
    }

    return !data.length ? <LoadingDisplay /> : <MainRender />

}