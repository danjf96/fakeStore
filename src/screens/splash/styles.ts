import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.principal
    },

    image: {
        width: '50%',
        resizeMode: 'contain'
    }
})

export default Styles