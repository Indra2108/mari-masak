import React, { useEffect, useState, useCallback } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, RefreshControl } from 'react-native';

// Import styles for styling
import styles from './styles';

// Import image
import lup from './assets/search.png';
import pancake from './assets/pancake.jpg';

export default ContentArticle = ({ navigation }) => {
    const [data, setData] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    // const Category = (props) => {
    //     return (
    //         <TouchableOpacity style={styles.backgroundCategory}>

    //             <Text style={styles.nameCategories}>{props.nama}</Text>
    //         </TouchableOpacity>
    //     )
    // }

    // const Genre = (props) => {
    //     return (
    //         <TouchableOpacity style={{ backgroundColor: '#28293d', padding: 15, marginTop: '2%', marginRight: '2%', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomRightRadius: 25 }}>
    //             <Text style={{ fontWeight: 'bold', color: '#e176d3' }}>{props.genre}</Text>
    //         </TouchableOpacity>
    //     )
    // }

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

    // { console.log('==> Successfully fetching data: ' + JSON.stringify(data)) }
    { console.log('==> Successfully fetching data: ' + data) }

    return (
        <View style={styles.container}>

            {console.log('==> render()')}
            {/* <View style={styles.container2}> */}

            <TouchableOpacity style={styles.backgroundSearch} onPress={() => navigation.navigate('Search')}>
                <Image source={lup} style={styles.lups} />
                <Text style={styles.textSearch}>Search</Text>
            </TouchableOpacity>

            {/* </View> */}

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <ScrollView horizontal contentContainerStyle={{ marginLeft: '3%' }}>
                    <Genre genre='Action' style={{ marginLeft: '10%' }} />
                    <Genre genre='Adventure' />
                    <Genre genre='Comedy' />
                    <Genre genre='Demons' />
                    <Genre genre='Drama' />
                    <Genre genre='Fantasy' />
                </ScrollView>
            </View> */}

            {/* <View style={styles.viewCategories}>
                <ScrollView horizontal contentContainerStyle={styles.scroolViewCategories}>
                <ScrollView horizontal>
                <Category nama='Dessert' />
                <Category nama='Masakan Hari Raya' />
                <Category nama='Masakan Tradisional' />
                <Category nama='Menu Makan Malam' />
                <Category nama='Menu Makan Siang' />
                <Category nama='Resep Ayam' />
                <Category nama='Resep Daging' />
                <Category nama='Resep Sayuran' />
                <Category nama='Resep Seafood' />
                <Category nama='Sarapan' />
                </ScrollView>
            </View> */}
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