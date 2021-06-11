import React from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate, TxKeyPath } from "../../i18n"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { moderateVerticalScale, scale, verticalScale } from "../../utils/scale"

// the base styling for the container
const CONTAINER: ViewStyle = {
  //paddingVertical: verticalScale(0),
  //backgroundColor: "red",
      borderBottomWidth: verticalScale(0.7),
      borderBottomColor: "rgb(254, 254, 254)",
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  //minHeight: verticalScale(44),
  height: verticalScale(42),
  fontSize: moderateVerticalScale(16),
  backgroundColor: color.transparent,
  padding: 0,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

const LABLE: TextStyle = { 
  fontSize: moderateVerticalScale(12),
  textAlign: "left",
  color: color.palette.white,
  fontFamily: typography.primary,
}

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  const containerStyles = flatten([CONTAINER, PRESETS[preset], styleOverride])
  const inputStyles = flatten([INPUT, inputStyleOverride])
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder



  return (
    <View style={containerStyles}>
      <Text preset="fieldLabel" tx={labelTx} text={label} style={LABLE} />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lighterGrey}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
      />
    </View>
  )
}
