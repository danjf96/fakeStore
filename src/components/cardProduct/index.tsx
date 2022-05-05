import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";
import { formatMoney } from "../../utils/functions";
import CustomButton from "../customButton";
import Styles from "./styles";
import { PRODUCTCARDPROPS } from "./types";

const CardProduct = ({
    styleContainer,
    data,
    onPressButton,
    theme = 'light'
}:PRODUCTCARDPROPS) => {
    return(
        <View style={[Styles.container, styleContainer]}>
            <View style={Styles.containerData}>
                <Image source={{ uri: data.image }} style={Styles.image} resizeMode='stretch'/>
                <View style={{ flex:1 }}>
                    <Text style={Styles.name} numberOfLines={2}>{data.title}</Text>
                    <Text style={Styles.price}><Text style={{ fontSize: 14 }}>1x</Text> R$ {formatMoney(data.price)}</Text>
                </View>
            </View>

            <View  style={Styles.containerButton} >
                <CustomButton text="-" 
                    style={[Styles.button, Styles.buttonLeft]} 
                    stylesText={Styles.buttonText}
                    onPress={() => onPressButton('rm', data)}
                />
                <CustomButton 
                    text="+" 
                    style={[Styles.button, Styles.buttonRight]} 
                    stylesText={Styles.buttonText}
                    onPress={() => onPressButton('add', data)}
                />
            </View>
        </View>
    )
}

export default CardProduct