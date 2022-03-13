import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '7%',
        backgroundColor: '#94c656',
    },
    container2: {
        // flex: 1,
        padding: '7%',
    },
    containerLottie: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#94c656',
    },
    lottie: {
        marginBottom: '5%'
    },
    textLottie: {
        color: 'white',
        fontFamily: 'Poppins-Regular'
    },
    backgroundSearch: {
        padding: '4%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    lups: {
        width: '10%',
        height: '100%',
        marginRight: '3.5%'
    },
    textSearch: {
        fontFamily: 'Poppins-Light',
        fontSize: 16
    },
    backgroundCategory: {
        paddingHorizontal: '8%',
        paddingVertical: '2%',
        backgroundColor: '#94c656',
        borderRadius: 20,
        marginRight: '3%',
    },
    nameCategories: {
        fontFamily: 'Poppins-SemiBold',
        color: 'white'
    },
    viewCategories: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    scroolViewCategories: {
        marginLeft: '4.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backgroundArticleCard: {
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: 'white',
        borderRadius: 15,
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
        width: '100%',
        height: 240,
        borderRadius: 15,
    },
    titleArticleCard: {
        paddingHorizontal: '5%',
        paddingTop: '5%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: 'black'
    },
    backgroundInfoArticleCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 5,
        padding: '2%',
    },
    infoArticleCard: {
        fontFamily: 'Poppins-Regular',
    }
})