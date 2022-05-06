import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-animatable";
import { formatMoney } from "../../utils/functions";
import CustomButton from "../customButton";
import Styles from "./styles";
import { PRODUCTPROPS } from "./types";

const Product = ({
    styleContainer,
    typeStyle = 'big',
    data,
    onPressButton,
    theme = 'light'
}:PRODUCTPROPS) => {
    return(
        <View style={[Styles(theme, typeStyle).container, styleContainer]}>
            <View>
                <Image source={{ uri: data.image }} style={Styles(theme, typeStyle).image} resizeMode='stretch'/>
                {typeStyle === 'small' && <CustomButton 
                    text="+"
                    style={[Styles(theme).button, { position: 'absolute', bottom: 0, right: 8 }]}
                    stylesText={Styles(theme).buttonText}
                    onPress={() => onPressButton && onPressButton(data)}
                    testID='buttonSmall'
                />}
            </View>
            <View>
                <Text style={Styles(theme).category}>{data.category}</Text>
                <Text style={Styles(theme).name} numberOfLines={2}>{data.title}</Text>
                
                {typeStyle === 'big' && <Text style={Styles(theme).description} numberOfLines={2}>{data.description}</Text>}
            </View>
            <View style={Styles(theme).containerPrice}>
                <Text style={Styles(theme).price}>R$ {formatMoney(data.price)}</Text>

                {typeStyle === 'big' && <CustomButton 
                    text="+"
                    style={Styles(theme).button}
                    stylesText={Styles(theme).buttonText}
                    onPress={() => onPressButton && onPressButton(data)}
                    testID='buttonBig'
                />}
            </View>
        </View>
    )
}

export default Product