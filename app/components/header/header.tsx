import React from "react"
import { View, ViewStyle, TextStyle, Image, ImageStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import { scale, verticalScale } from "../../utils/scale"

const Logo = require("./menu.png")
// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: scale(33),
  alignItems: "center",
  paddingTop: verticalScale(17.7),
  paddingBottom: verticalScale(17.7),
  justifyContent: "flex-start",
  borderBottomWidth: verticalScale(0.3),
  borderBottomColor: "rgba(254, 254, 254, 0.5)",
}
const TITLE: TextStyle = { textAlign: "center", fontSize: verticalScale(24), color: "#ffffff"  }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: scale(32) }
const RIGHT: ViewStyle = { width: scale(32) }
const LOGO: ImageStyle = {
  //width: scale(66.7),
  //height: verticalScale(66.7),
   //marginHorizontal: scale(0.6),
   resizeMode: "contain",
  }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={[TITLE, titleStyle]} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          {/* <Icon icon={rightIcon} /> */}
          <Image source={Logo} style={LOGO}/>
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
