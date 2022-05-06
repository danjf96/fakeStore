import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../store'
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
    const { list } = useAppSelector( state => state.shoppingCart)
    return (
        <View style={Styles(null,theme).container}>
            <TouchableOpacity onPress={onPressLeft} testID='buttonLeft' disabled={typeof(buttonLeft) === 'string'}>
                {buttonLeft && typeof(buttonLeft) !== 'string' && <Image source={buttonLeft} style={Styles(null,theme).icon} testID='imageLeft' />}
                {typeof(buttonLeft) === 'string' &&  <Text style={[Styles(null,theme).text, styleTextLeft]}>{buttonLeft}</Text>}
            </TouchableOpacity>

            <Text style={Styles(null,theme).text}>{title}</Text>

            <TouchableOpacity onPress={onPressRight} testID='buttonRight'>
                {buttonRight && <Image source={buttonRight} style={Styles({width: 30, height: 30},theme).icon} testID='imageRight'/>}
                {buttonRight && list.length > 0 && <Text style={Styles().lengthCart}>
                    {list.map( v => v.quantity).reduce( (a,b) => a+b)}
                </Text>}
            </TouchableOpacity>
        </View>
    )
}

export default Header