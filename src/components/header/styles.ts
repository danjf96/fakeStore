import { ColorSchemeName, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { fontFamily } from "../../assets/Globals";

const Styles = (custom?: any,theme?: ColorSchemeName) => StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...custom
    },

    text:{
        fontFamily,
        fontSize: 14,
        fontWeight: '700',
        color: theme === 'dark' ? 'white' : Colors.header
    },

    icon: {
        width: 18.33,
        height: 21.5,
        resizeMode:'contain'
    }
})

export default Styles