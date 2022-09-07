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
import pancake from './assets/pancake.jpg';

//import 3rd party library
import LottieView from 'lottie-react-native';

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
        return data.map((value, index) =>
            <View style={styles.backgroundArticleCard} key={index}>
                <TouchableOpacity onPress={() => navigation.navigate('Content', { key: value.key, image: value.thumb })}>
                    <Image source={{ uri: value.thumb }} style={styles.imageArticleCard} />
                    <Text style={styles.titleArticleCard}>{value.title}</Text>
                    <View style={styles.backgroundInfoArticleCard}>
                        {value.times && <Text style={styles.infoArticleCard}>{value.times}</Text>}
                        {value.serving && <Text style={styles.infoArticleCard}>{value.serving}</Text>}
                        {value.difficulty && <Text style={styles.infoArticleCard}>{value.difficulty}</Text>}
                    </View>
                </TouchableOpacity>
            </View>
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

                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                    <ReceiptCard />
                </ScrollView>
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