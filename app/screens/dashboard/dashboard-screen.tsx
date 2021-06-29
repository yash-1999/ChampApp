import React, { useState,useEffect, useCallback } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from "react-native"
import { DrawerActions, useIsFocused, useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { scale, verticalScale } from "../../utils/scale"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from "react-native-fbsdk-next/types/FBLoginButton"
import { TabNavigator, DrawerContent } from "../../navigators"
import { useStores } from "../../models"

const FULL: ViewStyle = { flex: 1, flexDirection: "column", backgroundColor: color.background}
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    //paddingHorizontal: scale(33),
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

  const FOOTER_CONTENT: ViewStyle = {
    //marginTop: verticalScale(33.3), 
    //marginLeft: 33.3,
    marginHorizontal: scale(33.3),
    justifyContent: "space-around",
    paddingVertical: verticalScale(181.3),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const FOOTER: ViewStyle = {
    marginTop: verticalScale(16.7), 
    //marginLeft: 33.3,
    //marginHorizontal: scale(33.3),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const CONTINUE: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
    backgroundColor: color.transparent,
    borderColor: "#ffffff",
    borderWidth: scale(0.3),
    //width: scale(200),
    
  }
  const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    //fontSize: moderateVerticalScale(15.3),
    letterSpacing: scale(3.07),
    color: "#ffffff",
    //marginTop: 20.7,
    textAlign: "left"
  }

  export const DashBoardScreen = observer(function DashBoardScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")

    const { catagoryData } = useStores();
    const isFocused = useIsFocused()
    useEffect(() => {
      if(isFocused){
        catagoryData.getMainCategoryData(0);
        //console.tron.log("hi",catagoryData.mainCatagory)
      }
       
    },[isFocused]) 
  
    

    return (
      <View style={FULL}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            />
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
              <Header 
                          headerTx="dashBoardScreen.dashboard"
                          //leftIcon="back"
                          rightIcon="back"
              />
              {/* <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{color:"black"}}>Dashboard!</Text> */}
        {/* <View style={{flex: 1, justifyContent: "flex-end", position: "relative", marginLeft: scale(-10), marginBottom: verticalScale(-125) }}>
                <Image source={require("./sahpe.png")} resizeMode="contain" />
                
              </View> */}
      {/* </View> */}

      
      <View style={FOOTER_CONTENT}>
      <FlatList 
          data = {catagoryData.mainCatagory}
          renderItem={({item}) => (
            // <View>
            //   <Text style={{ fontSize: 20, color: 'white' }}>{item.name}</Text>
            // </View>
            <View style={FOOTER}>
              <View>
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text={item.name}
                  //onPress={nextScreen}
                  //onPress={() => {loginHandle( data.username, data.password )}}
                  //onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                  onPress={() => {navigation.navigate('subcatagory',{ parentId: item.id })}}
                />
              </View>
              </View>
          )}
          keyExtractor={item => item.id}

      />
      </View>

<View style={{flex: 1, justifyContent: "flex-end", position: "relative", marginLeft: scale(-10), marginBottom: verticalScale(-125) }}>
                <Image source={require("./sahpe.png")} resizeMode="contain" />
                
              </View> 

          </Screen>
        </View>
  )
})