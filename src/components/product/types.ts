import { ColorSchemeName, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface PRODUCTPROPS {
    styleContainer?: ViewStyle,
    data: Product,
    typeStyle?: 'big' | 'small',
    onPressButton?: (data:Product) => void,
    theme?: ColorSchemeName
}

interface Product {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category":string,
    "image": string,
    "rating":{
        "rate" :number,
        "count": number
    }
}