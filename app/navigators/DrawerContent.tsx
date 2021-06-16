import React, { useState,useEffect } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet  } from "react-native"
import { useNavigation, NavigationContainer } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
// import { Button, Header, Screen, Text, Wallpaper } from "../../components"
// import { color, spacing, typography } from "../../theme"
// import { scale, verticalScale } from "../../utils/scale"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { styles } from "react-native-fbsdk-next/types/FBLoginButton"
import { DashBoardScreen} from "../screens"

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { AuthContext } from '../components/context/context';

//const bowserLogo = require("./l1.png")


  
 
  
 
 
  

 
export function DrawerContent(props) {
    const navigation = useNavigation()
    const nextScreen = () => navigation.navigate("dashboard")
    const { signOut } = React.useContext(AuthContext);
    
  
    return (
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                

                    <DrawerItem 
                        
                        label="Home"
                        onPress={() => {props.navigation.navigate('DashBoardScreen')}}
                    />
                    {/* <DrawerItem 
                        
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem 
                        
                        label="Bookmarks"
                        onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                    />
                    <DrawerItem 
                        
                        label="Settings"
                        onPress={() => {props.navigation.navigate('SettingsScreen')}}
                    />
                    <DrawerItem 
                        
                        label="Support"
                        onPress={() => {props.navigation.navigate('SupportScreen')}}
                    /> */}
                
                
            </View>
        </DrawerContentScrollView>
        
            <DrawerItem 
                
                label="Sign Out"
                onPress={() => {signOut()}}
            />
        
    </View>
     
    
  )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
