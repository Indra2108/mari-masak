import React from "react";
import { Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';

// Import styling
import styles from "./styles";

// Import images
import martabak from './assets/martabak-780x440.jpg';
import back from './assets/back.png';
import lovewhite from './assets/love.png';
import lovered from './assets/heart.png';

export default Content = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>

            {/* <ScrollView> */}

            <Image source={martabak} style={styles.martabaks} />
            <View style={styles.secondaryContainer}>
                <Text style={styles.titles}>Resep Martabak Manis Mini Topping Cokelat Karamel yang Lezat</Text>
                <Text style={styles.authorInfo}>Author: Rian Farisa    |   Tanggal: Oktober 13, 2021</Text>
                <Text style={styles.descriptions}>Sering pesan martabak manis lewat ojol (ojek online)? Supaya lebih hemat dan seru, sekarang kamu membuatnya sendiri di rumah, lho!</Text>
                <View style={styles.backgroundInfoMasak}>
                    <View style={styles.infoMasak}>
                        <Text>6 Porsi</Text>
                    </View>

                    <View style={styles.infoMasak}>
                        <Text>1jam</Text>
                    </View>

                    <View style={styles.infoMasak}>
                        <Text>Cukup rumit</Text>
                    </View>
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