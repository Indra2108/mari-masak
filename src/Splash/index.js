import React, { useEffect, useState } from "react";
import { View, Image, ActivityIndicator } from 'react-native';

// import styles
import s from './styles';

export default Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeBottomTab')
        }, 3000)
    }, [])

    return (
        <View style={s.container}>
            <Image source={require('./assets/masakapahariini-logo.png')} style={s.image} />
            <ActivityIndicator size='large' color='white'/>
        </View>
    )
}