import { ColorSchemeName, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { PRODUCTS } from "../../store/ducks/products/types";

export interface PRODUCTCARDPROPS {
    styleContainer?: ViewStyle,
    data: CardProduct,
    onPressButton: (type: 'add' | 'rm',data:CardProduct) => void,
    theme?: ColorSchemeName
}

interface CardProduct extends PRODUCTS {
    "quantity": number
}

