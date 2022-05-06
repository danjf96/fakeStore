import { ColorSchemeName, Dimensions, StyleSheet, StyleSheetProperties, ViewStyle } from "react-native";
import Colors from "../../assets/Colors";
import { fontFamily } from "../../assets/Globals";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 85,
        borderRadius: 12,
        backgroundColor: Colors.Background2,
        padding: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    containerData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%'
    },  

    image: {
        width: 38,
        height: 50,
        borderRadius: 10,
        marginRight: 11
    },

    name: {
        fontFamily,
        color: Colors.Text,
        fontSize: 14,
        fontWeight: '700',
        flexShrink: 1
    },

    price: {
        fontFamily,
        fontSize: 16,
        color: Colors.principal,
        fontWeight: '700'
    },

    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%'
    },

    button: { 
        backgroundColor: 'white', 
        width: 55, 
        height: 36, 
        borderWidth: 1,
        borderColor: '#CCCCCC', 
        borderRadius: 0
    },

    buttonLeft: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },

    buttonRight: {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },


    buttonText: {
        fontFamily,
        fontSize: 25,
        color: '#CCCCCC'
    }
})

export default Styles