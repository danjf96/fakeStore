import { StyleSheet } from "react-native"

export const fontFamily = 'WorkSans-Regular'


export const GlobalsStyles = StyleSheet.create({
    title: {
        fontFamily,
        width: '100%',
        fontSize: 24,
        marginBottom: 25,
        color: 'black',
        fontWeight: '700'
    },

    line: {
        width: '100%',
        height: 1,
        borderColor: '#EBEBED',
        borderWidth:1,
        marginVertical: 20
    }
})