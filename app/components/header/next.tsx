import React from "react"
import { View, ViewStyle, TextStyle, Image, ImageStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import { scale, verticalScale } from "../../utils/scale"
import { useNavigation, DrawerActions } from "@react-navigation/native"

const Logo = require("./hamburger.png")
const BACK = require("./back.png")
// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: scale(33),
  alignItems: "center",
  paddingTop: verticalScale(17.7),
  paddingBottom: verticalScale(17.7),
  justifyContent: "flex-start",
  //borderBottomWidth: verticalScale(0.3),
  //borderBottomColor: "rgba(254, 254, 254, 0.5)",
}
const TITLE: TextStyle = { textAlign: "center", fontSize: verticalScale(12), color: "rgb(255, 255, 255)", paddingRight:scale(5)  }
const TITLE2: TextStyle = { textAlign: "center", fontSize: verticalScale(12), color: "rgb(0, 0, 0)", paddingLeft:scale(5)  }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: scale(32) }
const RIGHT: ViewStyle = { width: scale(32) }
const LOGO: ImageStyle = {
  width: scale(20.7),
  height: verticalScale(8.7),
  marginTop: verticalScale(2),
   //marginHorizontal: scale(0.6),
   resizeMode: "contain",
  }
  const LOGONEXT: ImageStyle = {
    width: scale(20.7),
    height: verticalScale(8.7),
    marginTop: verticalScale(2),
     //marginHorizontal: scale(0.6),
     resizeMode: "contain",
     transform: [{ rotate: '180deg'}]
    }
const BUTTON: ViewStyle={flexDirection: "row",borderWidth: verticalScale(0.3),borderColor: "white", height: verticalScale(26.7), alignItems: "center"}
const BUTTONNEXT: ViewStyle={flexDirection: "row",backgroundColor: "rgb(238, 206, 0)", height: verticalScale(26.7), alignItems: "center"}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Next(props: HeaderProps) {
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


  const navigation = useNavigation()
  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button style={BUTTON} preset="link" onPress={() => navigation.goBack()}>
          {/* <Icon icon={leftIcon} /> */}
          <Image source={BACK} style={LOGO} />
          <Text style={[TITLE, titleStyle]} text="PREV" />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={[TITLE, titleStyle]} text={header} />
      </View>
      {rightIcon ? (
        <Button style={BUTTONNEXT} preset="link" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          {/* <Icon icon={rightIcon} /> */}
          <Text style={[TITLE2, titleStyle]} text="NEXT" />
          <Image source={BACK} style={LOGONEXT} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
