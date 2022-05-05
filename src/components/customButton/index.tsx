import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from './styles'
import { BUTTONPROPS } from './types'

const CustomButton = (props:BUTTONPROPS) => {
    return(
        <TouchableOpacity {...props} style={[Styles.container, props.style]}>
            <Text style={[Styles.text, props.stylesText]}>{props?.text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton