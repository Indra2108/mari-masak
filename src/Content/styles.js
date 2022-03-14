import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    secondaryContainer: {
        padding: '5%',
    },
    thirdContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    lottie: {
        marginBottom: '5%'
    },
    textLottie: {
        color: 'black',
        fontFamily: 'Poppins-Regular'
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
        height: 440,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    titles: {
        fontFamily: 'Poppins-Bold',
        fontSize: 23,
        color: 'black'
    },
    authorInfo: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
    },
    descriptions: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        marginTop: '6%',
        color: 'black'
    },
    backgroundInfoMasak: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: '7%'
    },
    infoMasak: {
        padding: '4%',
        borderRadius: 8,
        backgroundColor: '#94c656',
    },
    textInfoMasak: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white'
    },
    textNeedItems: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        marginTop: '7%',
        color: 'black'
    },
    backgroundMainItems: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    infoMainItems: {
        flexDirection: 'row',
        maxWidth: '27%',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageMainItems: {
        width: 100,
        height: 100
    },
    textMainItems: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        flexWrap: 'wrap',
        color: 'black'
    },
    backgroundItems: {
        flexDirection: 'row',
        paddingLeft: '5%'
    },
    textItems: {
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        color: 'black'
    }
})