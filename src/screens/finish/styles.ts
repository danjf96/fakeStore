import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { fontFamily } from "../../assets/Globals";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.principal,
    },

    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        tintColor: 'white',
        marginBottom: 30
    },

    title: {
        fontFamily,
        fontSize: 25,
        color: Colors.white,
        fontWeight: '700',
        marginBottom: 12,
    }
})

export default Styles