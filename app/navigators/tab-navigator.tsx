 import React from "react"
 import { createStackNavigator } from "@react-navigation/stack"
 import { DashBoardScreen } from "../screens"
 
 export type SecondaryParamList = {
   dashboard: undefined
 }
 
 const Stack = createStackNavigator<SecondaryParamList>()
 
 export function TabNavigator() {
   return (
     <Stack.Navigator
       screenOptions={{
         headerShown: false,
       }}
     >
       <Stack.Screen name="dashboard" component={DashBoardScreen} />
     </Stack.Navigator>
   )
 }
 
//  const exitRoutes = ["welcome"]
//  export const canExit = (routeName: string) => exitRoutes.includes(routeName)
 