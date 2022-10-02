import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '7%',
        backgroundColor: '#FEFFDE',
    },
    containerLottie: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottie: {
        marginBottom: '5%'
    },
    textLottie: {
        fontFamily: 'Poppins-Regular',
        // color: '#94c656',
        color: 'black'
    },
    backgroundSearch: {
        paddingHorizontal: '5%',
        backgroundColor: '#94c656',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        // position: 'absolute',
        // top: '3%',
        // right: '5%',
        // left: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
    },
    lups: {
        width: '8%',
        height: '40%',
        marginRight: '4%'
    },
    textSearch: {
        width: '80%',
        fontFamily: 'Poppins-Light',
        // backgroundColor: 'red'
        color: '#FEFFDE'
    },
    backgroundArticleCard: {
        marginTop: '5%',
        marginBottom: '2%',
        backgroundColor: '#94c656',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
    },
    imageArticleCard: {
        // width: '100%',
        // height: 240,
        // borderRadius: 15,

        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    titleArticleCard: {
        padding: '2.5%',
        color: '#FEFFDE',
        // fontFamily: 'Poppins-SemiBold',
        // fontSize: 20,

        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
    },
    backgroundInfoArticleCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    infoArticleCard: {
        fontFamily: 'Poppins-Regular'
    }
})