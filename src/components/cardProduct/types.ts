import { ColorSchemeName, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface PRODUCTCARDPROPS {
    styleContainer?: ViewStyle,
    data: Product,
    onPressButton: (type: 'add' | 'rm',data:Product) => void,
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
    },
    "quantity": number
}