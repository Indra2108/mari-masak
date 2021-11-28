import React from "react";
import { Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';

// Import styling
import styles from "./styles";

// Import images
import martabak from './assets/martabak-780x440.jpg';
import back from './assets/back.png';
import lovewhite from './assets/love.png';
import lovered from './assets/heart.png';
import sariwangi from './assets/sari-wangi-100x100.png';

export default Content = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>

            {/* <ScrollView> */}
                <Image source={martabak} style={styles.martabaks} />
                
                <View style={styles.secondaryContainer}>
                    <Text style={styles.titles}>Resep Martabak Manis Mini Topping Cokelat Karamel yang Lezat</Text>
                    <Text style={styles.authorInfo}>Penulis: Rian Farisa    |    Tanggal: Oktober 13, 2021</Text>
                    <Text style={styles.descriptions}>Sering pesan martabak manis lewat ojol (ojek online)? Supaya lebih hemat dan seru, sekarang kamu membuatnya sendiri di rumah, lho!</Text>
                    <View style={styles.backgroundInfoMasak}>
                        <View style={styles.infoMasak}>
                            <Text style={styles.textInfoMasak}>6 Porsi</Text>
                        </View>

                        <View style={styles.infoMasak}>
                            <Text style={styles.textInfoMasak}>1jam</Text>
                        </View>

                        <View style={styles.infoMasak}>
                            <Text style={styles.textInfoMasak}>Cukup rumit</Text>
                        </View>
                    </View>

                    <Text style={styles.textNeedItems}>Bahan spesial yang dibutuhkan: </Text>
                    <View style={styles.backgroundMainItems}>
                        <Image source={sariwangi} style={styles.mainItems} />
                        <Text></Text>
                    </View>
                </View>
            {/* </ScrollView> */}
            <View style={styles.headers}>
                <TouchableOpacity onProgress={() => navigation.navigate.goBack()} style={styles.backgroundImageHeaders}>
                    <Image source={back} style={styles.backbutton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.backgroundImageHeaders}>
                    <Image source={lovewhite} style={styles.loves} />
                </TouchableOpacity>
            </View>


        </View>
    )
}