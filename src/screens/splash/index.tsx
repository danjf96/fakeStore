import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-animatable'
import Styles from './styles'
const logo = require('../../assets/images/logo.png')

const Splash = (props:any) => {

    const endAnimation = (e:any) => {
        //console.log('END ANIMATION', e)
        e.finished && props.navigation.navigate('Home')
    }

    return (
        <View style={Styles.container}>
            <Image 
                source={logo}
                style={Styles.image}
                animation={'zoomIn'}
                onAnimationEnd={endAnimation}
                duration={1200}
                testID={'animation'}
            />
        </View>
    )
}

export default Splash