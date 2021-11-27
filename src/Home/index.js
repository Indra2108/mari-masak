import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Import styles for styling
import styles from './styles';

// Import image
import lup from './assets/search.png';

export default Home = () => {

    const Category = (props) => {
        return (
            <TouchableOpacity style={styles.backgroundCategory}>

                <Text style={styles.nameCategory}>{props.nama}</Text>
            </TouchableOpacity>
        )
    }

    const Genre = (props) => {
        return (
            <TouchableOpacity style={{ backgroundColor: '#28293d', padding: 15, marginTop: '2%', marginRight: '2%', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomRightRadius: 25 }}>
                <Text style={{ fontWeight: 'bold', color: '#e176d3' }}>{props.genre}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.backgroundSearch}>
                    <Image source={lup} style={styles.lups} />
                    <Text style={styles.textSearch}>Search</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <ScrollView horizontal contentContainerStyle={{ marginLeft: '3%' }}>
                    <Genre genre='Action' style={{ marginLeft: '10%' }} />
                    <Genre genre='Adventure' />
                    <Genre genre='Comedy' />
                    <Genre genre='Demons' />
                    <Genre genre='Drama' />
                    <Genre genre='Fantasy' />
                </ScrollView>
            </View>

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
        </View >
    )
}