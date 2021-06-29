import React, { useState,useEffect, useCallback } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from "react-native"
import { DrawerActions, useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
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
  const APIIMG: ImageStyle = {
    height:verticalScale(66.7),
     width: verticalScale(66.7),
     
     borderColor: "rgb(238, 206, 0)",
     borderWidth: scale(2),
     //borderTopLeftRadius: 200,
     borderRadius: 360,
     //tintColor: "rgb(238, 206, 0)",
     
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
    
    paddingVertical: verticalScale(160.3),
    marginBottom: verticalScale(80.7)
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const FOOTER: ViewStyle = {
    marginTop: verticalScale(28.7), 
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
  const APITEXT: TextStyle = {
    ...TEXT,
    
    paddingHorizontal: scale(18.7), 
    alignSelf:"center", 
    fontSize: scale(20) ,
    letterSpacing: scale(0.5),
    textAlign: "left",
    //marginTop: verticalScale(10.7)
  }

  export const SubCatagoryScreen = observer(function SubCatagoryScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")

    const { catagoryData } = useStores();
    const isFocused = useIsFocused()
    const route = useRoute();
    const { parentId } = newFunction(route);
    console.tron.log("parentId",parentId);

    useEffect(() => {
      if(isFocused){
        //catagoryData.getMainCategoryData(parentId);
        //console.tron.log("hi",catagoryData.mainCatagory)
        catagoryData.getSubCatagoryData(parentId);
        console.tron.log("subcatagory data",catagoryData.subCatagory)

        // let subCatagoryObj = catagoryData.mainCatagory.find(x => x.id == parentId);
        // console.tron.log("hi1",subCatagoryObj);
        // console.tron.log(subCatagoryObj.children)
    
        // const apiData = subCatagoryObj.children;
        // console.tron.log("subc no apidata",apiData);
    
        // const headerName = subCatagoryObj.name;
      }
       
    },[isFocused]) 
  
  
   
    
    let subCatagoryObj = catagoryData.mainCatagory.find(x => x.id == parentId);
    console.tron.log("hi1",subCatagoryObj);
    console.tron.log(subCatagoryObj.children)

    const apiData = subCatagoryObj.children;
    console.tron.log("subc no apidata",apiData);

    const headerName = subCatagoryObj.name;
    

    //const [isData, setIsData] = React.useState();
    //setIsData(subCatagoryObj.children);


    return (
      <View style={FULL}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            />
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
              <Header 
                          headerText={headerName}
                          leftIcon="back"
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
          //data = {catagoryData.mainCatagory}
          data = { apiData }
          renderItem={({item}) => (
            // <View>
            //   <Text style={{ fontSize: 20, color: 'white' }}>{item.name}</Text>
            // </View>
            <View style={FOOTER}>
              <View>
                {/* <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  
                  text={item.name}
                 
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                /> */}
                <TouchableOpacity onPress={() => {navigation.navigate('media',{ sname: item.name, parent_Id: item.parent_id, orData: item.id, type: item.type })}}>
                <View style={{flexDirection: "row"}}>
                <Image source={{
                     uri: String(item.icon),
                    }}  style={APIIMG} />
                <Text style={APITEXT}>{item.name}</Text></View>
                </TouchableOpacity>
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

function newFunction(route): { parentId: any } {
    return route.params
}
