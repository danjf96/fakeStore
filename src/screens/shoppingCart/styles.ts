import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { fontFamily, GlobalsStyles } from "../../assets/Globals";

const Styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%',
        backgroundColor: Colors.principal,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerPrice: { 
        width: '100%', 
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent:'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EBEBED'
    },

    image: {
        width: '90%',
        resizeMode: 'contain'
    },

    productContainer: {
        marginBottom: 16
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: Colors.Text
    },

    footer: {

    },

    textEmpty: {
        fontFamily,
        color: '#9A9999',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 16,
        width: '80%'
    },

    imageEmpty: {
        tintColor: '#696969',
        opacity: 0.3,
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 12
    }

 
})

export default Styles