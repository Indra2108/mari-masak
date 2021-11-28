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

    const SpecialItems = () => {
        return (
            <View style={styles.infoMainItems}>
                <Image source={sariwangi} style={styles.imageMainItems} />
                <Text style={styles.textMainItems}>SariWangi Milk Tea Caramel</Text>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>

            <ScrollView>
                <Image source={martabak} style={styles.martabaks} />

                <View style={styles.secondaryContainer}>
                    <Text style={styles.titles}>Resep Martabak Manis Mini Topping Cokelat Karamel yang Lezat</Text>
                    <Text style={styles.authorInfo}>Penulis: Rian Farisa    |    Tanggal: Oktober 13, 2021</Text>
                    <Text style={styles.descriptions}>Sering pesan martabak manis lewat ojol (ojek online)? Supaya lebih hemat dan seru, sekarang kamu membuatnya sendiri di rumah, lho! Bikin versi mini supaya topping-nya bisa bervariasi menyesuaikan selera anggota keluarga di rumah. Sebelum membuat, kamu wajib mempunyai cetakan martabak mini yang banyak dijual dengan harga terjangkau. Bukan hanya untuk martabak mini, cetakan ini juga bisa digunakan untuk membuat kue lumpur, pancake, atau maklor (makaroni telur). Jadi tak perlu ragu untuk membeli alat ini bila kamu belum punya.Selain pilihan topping yang menggoda dari bahan berkualitas, kunci kelezatan martabak manis adalah pada adonan tepungnya. Tekstur adonan yang pas dan berongga dengan kandungan mentega atau margarin yang bikin adonan jadi gurih, licin, dan tidak lengket pada cetakan.Pastikan menggunakan api kecil setelah cetakan martabak panas supaya adonan martabak matang merata dan tidak gosong di bagian bawahnya. Tuangkan adonan pada setiap cetakannya dan masak hingga berpori atau berlubang. Taburi gula dan tutup. Setelah matang, keluarkan, dan taburi dengan topping kesukaanmu!Sudah siap mencobanya untuk snack seru akhir pekan bareng keluarga nonton di rumah? Yuk, kita belanja dulu! Jangan lupa untuk follow, like, dan jika ada pertanyaan atau ingin request resep, kamu bisa langsung bertanya di kolom komentar akun Instagram Masak Apa Hari Ini.</Text>
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
                        <SpecialItems />
                    </View>

                </View>
            </ScrollView>

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