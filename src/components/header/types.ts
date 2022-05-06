import { ColorSchemeName, ImageSourcePropType, TextStyle } from "react-native";

export interface PROPSHEADER {
    title?: string,
    buttonLeft?: ImageSourcePropType | string,
    buttonRight?: ImageSourcePropType,
    theme?: ColorSchemeName
    onPressLeft?: () => void,
    onPressRight?: () => void,
    styleTextLeft?: TextStyle
}