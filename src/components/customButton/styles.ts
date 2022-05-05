import { StyleSheet } from "react-native";
import { fontFamily } from "../../assets/Globals";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#504DB6',
        borderRadius: 37,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontFamily,
        fontSize: 14,
        fontWeight: '700',
        color: 'white'
    }
})

export default Styles