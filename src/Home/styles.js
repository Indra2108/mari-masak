import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        // flex: 1,
        padding: '7%',
    },
    backgroundSearch: {
        padding: '4%',
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5
    },
    lups: {
        width: '10%',
        height: '100%',
        marginRight: '6%'
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
    nameCategory: {
        fontFamily: 'Poppins-Light',
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
    }
})