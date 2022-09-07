import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';

// Import styling
import styles from "./styles";

// Import images
// import martabak from './assets/martabak-780x440.jpg';
import back from './assets/back.png';
import lovewhite from './assets/love.png';
import lovered from './assets/heart.png';
// import sariwangi from './assets/sari-wangi-100x100.png';

// Import 3rd Party Library
import { useRoute } from "@react-navigation/native";
import LottieView from 'lottie-react-native';

export default Content = ({ navigation }) => {
    const [data, setData] = useState(Object);
    const [author, setAuthor] = useState(Object);
    const [specialItems, setSpecialItems] = useState(Array);
    const [items, setItems] = useState(Array);
    const [caraMembuat, setCaraMembuat] = useState(Array);
    const [lovepress, setLovePress] = useState(false)
    const route = useRoute();
    const { key, image } = route.params;

    useEffect(() => {

        console.log('==> useEffect()')

        Mengfetchdata()

    }, [])

    const Mengfetchdata = async () => {

        await fetch(`https://masak-apa-tomorisakura.vercel.app/api/recipe/${key}`)
            .then(response => response.json())
            .then((respon) => {
                console.log('==> Fetching data...');
                setData(respon.results)
                setSpecialItems(respon.results.needItem)
                setItems(respon.results.ingredient)
                setCaraMembuat(respon.results.step)
                setAuthor(respon.results.author)
                // console.log(respon.results)
            })
            .catch(e => console.log(e))

    }

    // FUNCTION BELOW FOR RENDERING COMPONENT

    const SpecialItems = () => {
        return specialItems.map((value, index) =>
            <View style={styles.infoMainItems} key={index}>
                <Image source={{ uri: value.thumb_item }} style={styles.imageMainItems} />
                <Text style={styles.textMainItems}>{value.item_name}</Text>
            </View>
        )
    }

    const Items = () => {
        return items.map((value, index) =>
            <View style={styles.backgroundItems} key={index}>
                <Text style={styles.textItems}>{'\u2022'}  </Text>
                <Text style={styles.textItems}>{value}</Text>
            </View>
        )
    }

    const CaraMembuat = () => {
        return caraMembuat.map((value, index) =>
            <View style={styles.backgroundItems} key={index}>
                <Text style={styles.textItems}>{'\u2022'}  </Text>
                <Text style={styles.textItems}>{value}</Text>
            </View>
        )
    }

    const Header = () => {
        return (
            <View style={styles.headers}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backgroundImageHeaders}>
                    <Image source={back} style={styles.backbutton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.backgroundImageHeaders} onPress={() => lovepress ? setLovePress(false) : setLovePress(true)}>
                    <Image source={lovepress ? lovered : lovewhite} style={styles.loves} />
                </TouchableOpacity>
            </View>
        )
    }

    const MainRender = () => {

        return (

            <View style={styles.mainContainer}>

                {console.log('==> render()')}

                <ScrollView>

                    {console.log('==> data: ' + JSON.stringify(data))}

                    {data.thumb == null ? <Image source={{ uri: image }} style={styles.martabaks} /> : <Image source={{ uri: data.thumb }} style={styles.martabaks} />}

                    <View style={styles.secondaryContainer}>

                        <Text style={styles.titles}>{data.title}</Text>

                        {/* <Text style={styles.authorInfo}>{data.author.user === undefined ? null : 'Author: ' + data.author.user}    |     {data.author.datePublished === undefined ? null : 'Tanggal: ' + data.author.datePublished}</Text> */}

                        <Text style={styles.authorInfo}>{author && 'Penulis: ' + author.user}    |    {author && 'Tanggal: ' + author.datePublished}</Text>

                        {/* {console.log(JSON.parse() + ' ' + JSON.parse(data.author.datePublished))} */}

                        <Text style={styles.descriptions}>{data.desc}</Text>

                        <View style={styles.backgroundInfoMasak}>

                            {data.servings && <View style={styles.infoMasak}>
                                <Text style={styles.textInfoMasak}>{data.servings}</Text>
                            </View>}

                            {data.times && <View style={styles.infoMasak}>
                                <Text style={styles.textInfoMasak}>{data.times}</Text>
                            </View>}

                            {data.difficulty && <View style={styles.infoMasak}>
                                <Text style={styles.textInfoMasak}>{data.difficulty}</Text>
                            </View>}

                        </View>

                        <Text style={styles.textNeedItems}>Bahan spesial yang diperlukan: </Text>

                        <View style={styles.backgroundMainItems}>
                            <SpecialItems />
                        </View>

                        <Text style={styles.textNeedItems}>Bahan bahan: </Text>

                        <Items />

                        <Text style={styles.textNeedItems}>Cara membuat: </Text>

                        <CaraMembuat />

                    </View>

                </ScrollView >

                <Header />

            </View >

        )

    }

    const MengLoading = () => {
        return (
            <View style={styles.thirdContainer}>
                <Header />
                <LottieView source={require('../../assets/animations/loadingresep.json')} autoPlay autoSize loop style={styles.lottie} />
                <Text style={styles.textLottie}>Sedang Memuat Konten...</Text>
            </View>
        )
    }

    // return() BELOW IS LIKE render() IN CLASS COMPONENT

    return !items.length ? <MengLoading /> : <MainRender />
    // return <MainRender />

}