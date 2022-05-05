import { ColorSchemeName, Dimensions, StyleSheet, StyleSheetProperties, ViewStyle } from "react-native";
import Colors from "../../assets/Colors";
import { fontFamily } from "../../assets/Globals";
const { width } = Dimensions.get('screen')
const Styles = (theme?: ColorSchemeName, type?: string) => StyleSheet.create({
    container: {
        width: type === 'big' ? width * 0.5 : width * 0.4
    },

    image: {
        width: '100%',
        height: type === 'big' ? 183 : 139,
    },

    category: {
        fontFamily,
        fontSize: 12,
        color: Colors.Text2,
        fontWeight: '700',
        marginVertical: 2
    },

    name: {
        fontFamily,
        color: theme == 'dark' ? Colors.white : Colors.Text,
        fontSize: 14,
        fontWeight: '700'
    },

    description: {
        fontFamily,
        color: theme === 'dark' ? Colors.white : '#85868A',
        fontSize: 12,
        textAlign: 'justify',
        fontWeight: '500',
        flexShrink: 1,
        width: '100%',
        marginBottom: 10
    },

    price: {
        fontFamily,
        fontSize: 22,
        color: Colors.principal,
        fontWeight: '700'
    },

    containerPrice: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: { 
        backgroundColor: 'white', 
        width: 35, 
        height: 35, 
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.principal, 
    },

    buttonText: {
        fontFamily,
        fontSize: 20,
        color: Colors.principal
    }
})

export default Styles