/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import React,{useEffect,useState} from "react"
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { MainNavigator } from "./main-navigator"
import { TabNavigator } from "./tab-navigator"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../components/context/context';
import { Wallpaper,Screen } from '../components'
import { color } from '../theme'
import { observer } from "mobx-react-lite";
import { useStores } from "../models";
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  mainStack: undefined
  tabStack: undefined
}

const Stack = createStackNavigator<RootParamList>()

const RootStack = observer(() => {
  const {catagoryData} = useStores();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {catagoryData.userToken !== "" ? (<Stack.Screen
        name="mainStack"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />) : (<Stack.Screen
        name="tabStack"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />)}
      
    </Stack.Navigator>
  )

})

// const TabStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
      
//     </Stack.Navigator>
//   )
// }

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {

  // const [isloggedin,setLogged] = useState('')

  //  const detectLogin= async ()=>{
  //     const token = await AsyncStorage.getItem('token')
  //     if(token){
  //         setLogged('f')
  //         console.log("f")
  //     }else{
  //         setLogged('')
  //         console.log(" khali ")
  //     }
  //  }
  // useEffect(()=>{
  //    detectLogin()
  // },[])

  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch( action.type ) {
  //     case 'RETRIEVE_TOKEN': 
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN': 
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT': 
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER': 
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // const authContext = React.useMemo(() => ({
  //   signIn: async(foundUser) => {
  //     // setUserToken('fgkj');
  //     // setIsLoading(false);
  //     const userToken = String(foundUser[0].userToken);
  //     const userName = foundUser[0].username;
      
  //     try {
  //       await AsyncStorage.setItem('userToken', userToken);
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'LOGIN', id: userName, token: userToken });
  //   },
  //   signOut: async() => {
  //     // setUserToken(null);
  //     // setIsLoading(false);
  //     try {
  //       await AsyncStorage.removeItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   signUp: () => {
  //     // setUserToken('fgkj');
  //     // setIsLoading(false);
  //   },
    
  // }), []);

  // useEffect(() => {
  //   setTimeout(async() => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  //   }, 1000);
  // }, []);

  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: color.background}}>
  //       <ActivityIndicator size="large"/>
  //       {/* <Wallpaper preset="cover" />
  //         <Screen style={{backgroundColor: color.transparent}} preset="fixed" backgroundColor={color.transparent}>
  //           </Screen> */}
  //     </View>
  //   );
  // }

  return (
    // <AuthContext.Provider >
    <NavigationContainer {...props} ref={ref}>
      {/* <RootStack /> */}
      {/* { loginState.userToken !== null ? (
        <TabStack />
      )
    :
      <RootStack />
    } */}
    <RootStack />
    </NavigationContainer>
    // </AuthContext.Provider>
  )
})

RootNavigator.displayName = "RootNavigator"
