import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Styles from './styles'
import { PROPSHEADER } from './types'

const Header = ({ 
    buttonRight, 
    buttonLeft, 
    title, 
    theme,
    onPressLeft,
    onPressRight,
    styleTextLeft
}: PROPSHEADER) => {
    return (
        <View style={Styles(null,theme).container}>
            <TouchableOpacity onPress={onPressLeft} testID='buttonLeft' disabled={typeof(buttonLeft) === 'string'}>
                {buttonLeft && typeof(buttonLeft) !== 'string' && <Image source={buttonLeft} style={Styles(null,theme).icon} testID='imageLeft' />}
                {typeof(buttonLeft) === 'string' &&  <Text style={[Styles(null,theme).text, styleTextLeft]}>{buttonLeft}</Text>}
            </TouchableOpacity>

            <Text style={Styles(null,theme).text}>{title}</Text>

            <TouchableOpacity onPress={onPressRight} testID='buttonRight'>
                {buttonRight && <Image source={buttonRight} style={Styles(null,theme).icon} testID='imageRight'/>}
            </TouchableOpacity>
        </View>
    )
}

export default Header