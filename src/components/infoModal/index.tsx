import React from 'react'
import { Modal, Text, View } from 'react-native'
import Colors from '../../assets/Colors'
import CustomButton from '../customButton'
import Styles from './styles'
import { INFOMODALPROPS } from './types'


const InfoModal = ({
    visible,
    title,
    text,
    btnSuccess,
    btnCancel,
    textCancel,
    textSuccess
}:INFOMODALPROPS) => {
    return(
        <Modal visible={visible} style={{ flex: 1 }} transparent>
            <View style={Styles.container}>

                <View style={Styles.modal}>
                    <Text style={Styles.title}>{title}</Text>

                    <Text style={Styles.text}>{text}</Text>

                    <CustomButton 
                        text={textSuccess}
                        onPress={btnSuccess}
                        style={Styles.button}
                        stylesText={{ color: Colors.ok }}
                    />

                    <CustomButton 
                        text={textCancel}
                        onPress={btnCancel}
                        style={Styles.button}
                        stylesText={{ color: Colors.cancel }}
                    />

                </View>
            </View>
        </Modal>
    )    
}

export default InfoModal