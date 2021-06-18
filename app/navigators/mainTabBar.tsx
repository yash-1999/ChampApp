import React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar, TouchableOpacity } from "react-native"
//import { DashBoardScreen} from "../screens"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../components/context/context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { scale, verticalScale } from "../utils/scale"
import { color, spacing, typography } from "../theme"
import { Button, Header, Screen, Text, Wallpaper } from "../components"
import { MyProfileScreen, DashBoardScreen } from "../screens";
import { DrawerNavigator } from "./drawerNavigator";
import { createStackNavigator } from "@react-navigation/stack"

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

  

// function Profile() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <Text style={{color:"black"}}>Profile!</Text>
//         <View style={{flex: 1, justifyContent: "flex-end", position: "relative", marginLeft: scale(190), marginBottom: verticalScale(-125) }}>
//                 <Image source={require("./sahpe.png")} resizeMode="contain" />
//                 {/* <Image source={require("./sahpe.png")} resizeMode="contain" /> */}
//               </View>
//       </View>
//     );
//   }
  
  function Dashboard() {
    const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center',  backgroundColor: color.transparent, }}>
        <View style={FOOTER_CONTENT}>
              <View>
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text="PREPARE"
                  //onPress={nextScreen}
                  //onPress={() => {loginHandle( data.username, data.password )}}
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
              </View>

              <View style={FOOTER}>
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text="LEARN"
                  //onPress={nextScreen}
                  //onPress={() => {loginHandle( data.username, data.password )}}
                />
              </View>

              <View style={FOOTER}>
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text="TRAIN"
                  //onPress={nextScreen}
                  //onPress={() => {loginHandle( data.username, data.password )}}
                />
              </View>
              </View>
              <View style={{flex: 1, justifyContent: "flex-end", position: "relative", marginLeft: scale(-10), marginBottom: verticalScale(-125) }}>
                <Image source={require("./sahpe.png")} resizeMode="contain" />
                {/* <Image source={require("./sahpe.png")} resizeMode="contain" /> */}
              </View>
      </View>
    );
  }
  export type RtParamList = {
    drawer: undefined
    //tabStack: undefined
  }
  const Stack = createStackNavigator<RtParamList>()
  const DrawerStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

const Tab = createBottomTabNavigator();

export function MainTabBar() {
  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
    //barStyle={{ backgroundColor: '#694fad' }}
    
    tabBarOptions={{
      activeTintColor: 'rgb(0, 0, 0)',
      inactiveTintColor: 'rgb(0, 0, 0)',
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "rgb(238, 206, 0)",
      style: {height: verticalScale(91.5), borderTopColor: "white"}
      
    }}
    //activeTintColor="#e91e63"
    //labelStyle={{ fontSize: 12 }}
    //style={{ backgroundColor: 'tomato' }}
  >
    
    <Tab.Screen
      name="Dashboard"
      component={DrawerStack}
      //barStyle={{backgroundColor: 'tomato'}}
      options={{
        tabBarLabel: 'Dashboard',
         tabBarIcon: ({ color }) => (
        //   <MaterialCommunityIcons name="bell" color={color} size={26} />
        //onPress={() => {<Image source={require("./shape1.png")} />}},
        <View>
        <Image 
        source={require("./shape1.png")}
        resizeMode="contain"
        
            
      />
      {/* <Image source={require("./sahpe.png")} resizeMode="contain" /> */}
      </View>
      
         ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={MyProfileScreen}
      
      options={{
        tabBarLabel: 'My Profile',
        tabBarIcon: ({ focused }) => (
          // <TouchableOpacity>
          //     <View style={{
          //       backgroundColor: "red",
          //       justifyContent: "center",
          //       alignItems: "center",
          //      // height: verticalScale(85),
          //     }}>
                
          
          //     </View>
          // </TouchableOpacity>
          <Image 
          source={require("./shape11.png")}
          resizeMode="contain"

        />
          // <MaterialCommunityIcons name="account" color={color} size={26} />
          
        ),
        
      }}
    />
  </Tab.Navigator>
  )
}


