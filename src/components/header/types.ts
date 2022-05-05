import { ColorSchemeName, ImageSourcePropType } from "react-native";

export interface PROPSHEADER {
    title?: string,
    buttonLeft?: ImageSourcePropType | string,
    buttonRight?: ImageSourcePropType,
    theme?: ColorSchemeName
    onPressLeft?: () => void,
    onPressRight?: () => void,
}