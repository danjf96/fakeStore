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
        color: theme === 'dark' ? 'white' : Colors.header,
        textTransform: 'uppercase',
        ...custom
    },

    icon: {
        width: 18.33,
        height: 18.5,
        resizeMode:'contain',
        ...custom
    },
    
    lengthCart: {
        width: 20, 
        height: 20, 
        backgroundColor: 'white', 
        borderRadius: 10 , 
        position: 'absolute', 
        top: 0,
        right: -5 ,
        zIndex: 99,
        textAlign: 'center',
        fontWeight: '700',
        fontFamily,
        color: Colors.principal,
        borderColor: Colors.principal,
        borderWidth: 0.5
    }
})

export default Styles