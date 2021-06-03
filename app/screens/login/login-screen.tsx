import React, { useState,useEffect } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { TextInput } from "react-native-gesture-handler"
const bowserLogo = require("./l1.png")

const FULL: ViewStyle = { flex: 1, flexDirection: "column", backgroundColor: color.background }
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    //paddingHorizontal: spacing[4],
    //opacity: 10,
  }
const BOWSER: ImageStyle = {
    marginLeft: 33.3,
    //marginRight: 275,
    //marginVertical: spacing[5],
    marginTop: 78.7,
    //marginBottom: 666.7,
    maxWidth: 66.7,
    maxHeight: 66.7,
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
  const TITLE_WRAPPER: ViewStyle = {
    ...TEXT,
    //textAlign: "left",
    //maxWidth: 221.7,
    //maxHeight: 45.7,
    marginLeft: 32.7,
    //marginRight: 120.7,
    marginTop: 18.7,
    //marginBottom: 602.3,
  }
  const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 30,
    //lineHeight: 38,
    textAlign: "left",
    color: "rgb(254, 254, 254)",
    // maxWidth: 220,
    // maxHeight: 42.3,
    // marginLeft: 77.7,
    // marginRight: 77.3,
    // marginTop: 370,
    // marginBottom: 399.7,
  }
  const TITLEE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 16.7,
    //lineHeight: 38,
    textAlign: "left",
    color: "rgb(254, 254, 254)",
    // maxWidth: 220,
    // maxHeight: 42.3,
    // marginLeft: 77.7,
    // marginRight: 77.3,
    // marginTop: 370,
    // marginBottom: 399.7,
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
  const CONTINUE: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
    
    
  }
  const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 15.3,
    letterSpacing: 3.07,
    color: "rgb(0, 0, 0)",
    //marginTop: 20.7,
    textAlign: "left"
  }
  const FOOTER: ViewStyle = { backgroundColor: "rgb(238, 206, 0)",marginTop: 33.3, 
  marginLeft: 33.3, maxHeight: 53.3 , maxWidth: 308.3 }
  const FOOTER_CONTENT: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
  }
  const EMAIL: ViewStyle = { //marginTop: 46.3, 
    //marginBottom: 501.7
    marginTop: 46.3, 
    marginLeft: 33.3, 
}
  const EMAIL_CONT: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
    
  }
  const EA: TextStyle = { 
      //marginLeft: 33.3,
      //marginRight: 264.3,
      //maxHeight: 9.3,
      //maxWidth: 77.3,
      fontSize: 12,
      textAlign: "left",
    }
    const EATI: TextStyle = { 
        //marginLeft: 33.3,
        //marginRight: 33.3,
        //maxHeight: 29.4,
        //maxWidth: 308.3,
        //paddingTop: 13.7,
        marginTop: 15.7,
        fontSize: 16,
        textAlign: "left",
        color: "rgb(254, 254, 254)",
        maxWidth: 308.3,
        borderBottomWidth: 0.7,
        borderBottomColor: "rgb(254, 254, 254)",
        //borderBottomColor: "rgb(255, 255, 255)",
      }
  const PASS: ViewStyle = { marginTop: 32.7, 
    marginLeft: 33.3,  }
  const PASS_CONT: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
  }
  const PA: TextStyle = { 
    //marginLeft: 33.3,
    //marginRight: 264.3,
    //maxHeight: 9.3,
    //maxWidth: 77.3,
    fontSize: 12,
    textAlign: "left",
  }
  const PATI: TextStyle = { 
      //marginLeft: 33.3,
      //marginRight: 33.3,
      //maxHeight: 29.4,
      //maxWidth: 308.3,
      //paddingTop: 13.7,
      marginTop: 15.7,
      fontSize: 16,
      textAlign: "left",
      color: "rgb(254, 254, 254)",
      maxWidth: 308.3,
      borderBottomWidth: 0.7,
      borderBottomColor: "rgb(254, 254, 254)",
      //borderBottomColor: "rgb(255, 255, 255)",
    }

export const LoginScreen = observer(function LoginScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")
//     useEffect(()=>{
//       setTimeout(() => {
//           //checklog();
//           navigation.navigate("")
//       }, 5000);
//   },[])
  
    return (
      <View style={FULL}>
          {/* <Wallpaper style={WALL}/> */}
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Image source={bowserLogo} style={BOWSER} />
          <View style={TITLE_WRAPPER}>
                <Text style={TITLE} preset="header" tx="splashScreen.welcome" />
                <Text style={TITLEE} text="sign in to continue" />
          </View>
         
          <SafeAreaView style={EMAIL}>
        <View style={EMAIL_CONT}>
          {/* <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          /> */}
          <Text style={EA} text="Email  Address" />
          <TextInput style={EATI} placeholder="Wallace E. Kyser" placeholderTextColor="rgb(254, 254, 254)" />
        </View>
      </SafeAreaView>

      <SafeAreaView style={PASS}>
        <View style={PASS_CONT}>
          {/* <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          /> */}
          <Text style={PA} text="Password" />
          <TextInput style={PATI} secureTextEntry={true} placeholder="Password" placeholderTextColor="rgb(254, 254, 254)" />
        </View>
      </SafeAreaView>

      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            // tx="welcomeScreen.continue"
            text="SIGN IN"
            //onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
      
          
          {/* <Text style={TITLE} preset="header" tx="splashScreen.boxing" /> */}
          {/* <Text style={TITLE} text="Your new app, " /> */}
          {/* <Text style={CONTENT}>
          BY TATVASOFT
        </Text> */}

          </Screen>
        </View>
  )
})