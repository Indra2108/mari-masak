import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    secondaryContainer: {
        padding: '5%',
        // backgroundColor: 'red'
    },
    headers: {
        width: '100%',
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
    },
    backgroundImageHeaders: {
        height: '100%',
        backgroundColor: '#94c656',
        padding: '3%',
        borderRadius: 10
    },
    backbutton: {
        width: 32,
        height: 32
    },
    loves: {
        width: 32,
        height: 32
    },
    martabaks: {
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    titles: {
        fontFamily: 'Poppins-Bold',
        fontSize: 23
    },
    authorInfo: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
    },
    descriptions: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        marginTop: '6%'
    },
    backgroundInfoMasak: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: '7%'
    },
    infoMasak: {
        padding: '4%',
        // borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#94c656',
        // borderColor: 'white'

    },
    textInfoMasak: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white'
    },
    textNeedItems: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        marginTop: '7%'
    },
    mainItems: {
        width: 100,
        height: 100
    }
})