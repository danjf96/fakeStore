import { ColorSchemeName, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { PRODUCTS } from "../../store/ducks/products/types";

export interface PRODUCTCARDPROPS {
    styleContainer?: ViewStyle,
    data: CARDPRODUCCTPROPS,
    onPressButton: (type: 'add' | 'rm',data:CARDPRODUCCTPROPS) => void,
    theme?: ColorSchemeName
}

export interface CARDPRODUCCTPROPS extends PRODUCTS {
    "quantity": number
}

