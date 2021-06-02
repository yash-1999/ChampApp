import React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
const bowserLogo = require("./l1.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
    opacity: 10,
  }
const BOWSER: ImageStyle = {
    alignSelf: "center",
    //marginVertical: spacing[5],
    marginTop: 272,
    marginBottom: 454.7,
    maxWidth: 85.3,
    maxHeight: 85.3,
  }
  const WALL: ImageStyle = {
    //alignSelf: "center",
    //marginVertical: spacing[5],
    //marginTop: 272,
    //marginBottom: 454.7,
    maxWidth: 375,
    maxHeight: 812,
  }
  const TEXT: TextStyle = {
    color: "#BAB6C8",
    fontFamily: typography.primary,
  }
  const BOLD: TextStyle = { fontWeight: "bold" }
  const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 56.7,
    //lineHeight: 38,
    textAlign: "left",
  }

export const SplashScreen = observer(function SplashScreen() {
    const navigation = useNavigation()
    const nextScreen = () => navigation.navigate("demo")
  
    return (
      <View testID="SplashScreen" style={FULL}>
          <Wallpaper style={WALL}/>
          <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Image source={bowserLogo} style={BOWSER} />
          <Text style={TITLE} preset="header" tx="splashScreen.boxing" />
          <Text style={TITLE} text="Your new app, " />

          </Screen>
        </View>
  )
})