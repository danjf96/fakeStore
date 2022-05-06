import { CommonActions } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-animatable'
import CustomButton from '../../components/customButton'
import { useAppDispatch } from '../../store'
import { cleanCart } from '../../store/ducks/shoppingCart'
import Styles from './styles'

const success = require('../../assets/images/success.png')

const Finish = (props:any) => {
    const dispatch = useAppDispatch()

    const finish = () => {
        props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Home' }
            ],
        }))
    }

    useEffect( () => dispatch( cleanCart()) , [])

    return (
        <View style={Styles.container}>
            <Image 
                source={success}
                resizeMode='contain'
                style={Styles.image}
            />
            <Text style={Styles.title}>SUCESSO!</Text>
            <Text style={[Styles.title, { fontSize: 16, fontWeight: 'normal' }]}>Compra realizada com sucesso, aproveite!</Text>

            <CustomButton 
                text='PROSSEGUIR'
                onPress={finish}
                style={{ position: 'absolute', bottom: 60, width: '90%'}}
            />
        </View>
    )
}

export default Finish