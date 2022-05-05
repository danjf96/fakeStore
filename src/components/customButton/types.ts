import { TextStyle, TouchableOpacityProps } from "react-native";

export interface BUTTONPROPS  extends TouchableOpacityProps {
    text?: string,
    stylesText?: TextStyle
}