import { StyleSheet } from "react-native";
import { fontFamily } from "../../assets/Globals";

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        height: '100%'
    },

    modal: {
        width: '80%',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },

    title: {
        fontFamily,
        fontSize: 20,
        fontWeight: '700',
        color: '#696969',
        textAlign: 'center',
        marginBottom: 8
    },

    text: {
        fontFamily,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#B5B5B5',
        width: '90%'
    },

    button: {
        paddingVertical: 14,
        borderTopWidth: 1,
        borderColor: '#E7E7E7',
        width: '100%',
        borderRadius: 0,
        backgroundColor: 'white'
    }
})

export default Styles