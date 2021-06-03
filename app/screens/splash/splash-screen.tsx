import React, { useState,useEffect } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { scale, verticalScale } from "../../utils/scale"
const bowserLogo = require("./l1.png")

const FULL: ViewStyle = { flex: 1 , backgroundColor: color.palette.black}
const CONTAINER: ViewStyle = {
    backgroundColor: color.palette.black,
    paddingHorizontal: spacing[4],
    opacity: 10,
  }
const BOWSER: ImageStyle = {
    alignSelf: "center",
    //marginVertical: spacing[5],
    //marginTop: 272,
    marginTop: verticalScale(272),
    marginBottom: 454.7,
    // maxWidth: 85.3,
    maxWidth: scale(85.3),
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
    color: color.palette.white,
    fontFamily: typography.primary,
  }
  const BOLD: TextStyle = { fontWeight: "bold" }
  const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 56.7,
    //lineHeight: 38,
    textAlign: "left",
    color: "rgb(254, 254, 254)",
    maxWidth: 220,
    maxHeight: 42.3,
    marginLeft: 77.7,
    marginRight: 77.3,
    marginTop: 370,
    marginBottom: 399.7,
  }
  const CONTENT: TextStyle = {
    ...TEXT,
    color: "rgb(254, 254, 254)",
    fontSize: 12,
    //lineHeight: 22,
    //marginBottom: spacing[5],
    textAlign: "left",
    letterSpacing: 5.76,
    maxWidth: 140,
    maxHeight: 9,
    marginLeft: 117.7,
    marginRight: 117.3,
    marginTop: 421.7,
    marginBottom: 381.3,
  }

export const SplashScreen = observer(function SplashScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")
    useEffect(()=>{
      setTimeout(() => {
          //checklog();
          navigation.navigate("login")
      }, 5000);
  },[])
  
    return (
      <View testID="SplashScreen" style={FULL}>
          <Wallpaper style={WALL}/>
          <Screen style={CONTAINER} preset="scroll" backgroundColor={color.palette.black}>
          <Image source={bowserLogo} style={BOWSER} />
          
          <Text style={TITLE} preset="header" tx="splashScreen.boxing" />
          {/* <Text style={TITLE} text="Your new app, " /> */}
          <Text style={CONTENT}>
          BY TATVASOFT
        </Text>

          </Screen>
        </View>
  )
})