import React from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';

// Import styles for styling
import styles from './styles';

// Import image
import lup from './assets/search.png';

export default Home = () => {

    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backgroundSearch}>
                <Image source={lup} style={styles.lups} />
                <Text style={styles.textSearch}>Search</Text>
            </TouchableOpacity>

        </View>
    )
}