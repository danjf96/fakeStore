import { ColorSchemeName, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { fontFamily } from "../../assets/Globals";

const Styles = (theme?: ColorSchemeName, ) => StyleSheet.create({
    titleCategory: {
        fontFamily,
        fontSize: 12,
        color: '#6F6F6F',
        marginBottom: 8,
        fontWeight:'700'
    },

    buttonCategory: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        width: 'auto',
        height: 'auto',
        marginRight: 8
    },

    buttonDisable: {
        backgroundColor: 'white',
        borderColor: '#B4B4B6',
        borderWidth: 1
    },

    textDisable: {
        color: '#B4B4B6'
    }
})

export default Styles