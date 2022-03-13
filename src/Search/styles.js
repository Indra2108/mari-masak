import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '7%',
        backgroundColor: '#94c656',
    },
    backgroundSearch: {
        paddingHorizontal: '5%',
        backgroundColor: '#f4f4f4',
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
        width: '10%',
        height: '65%',
        marginRight: '4%'
    },
    textSearch: {
        width: '80%',
        fontFamily: 'Poppins-Light',
        // backgroundColor: 'red'
    },
    backgroundArticleCard: {
        marginTop: '5%',
        marginBottom: '2%',
        backgroundColor: 'white',
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
        color: 'black',
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