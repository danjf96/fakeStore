import React from 'react'
import { SafeAreaView, View, ViewProps } from 'react-native'
import Styles from './styles'

const Container = (props:ViewProps) => {
    return(
        <SafeAreaView>
            <View {...props} style={[Styles.container, props.style]}/>
        </SafeAreaView>
    )
}

export default Container