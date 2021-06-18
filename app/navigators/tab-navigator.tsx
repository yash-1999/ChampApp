import React from "react"

import { DashBoardScreen} from "../screens"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../components/context/context';
import { DrawerContent } from './DrawerContent'
import { MainTabBar } from "./mainTabBar";


const Drawer = createDrawerNavigator();

export function TabNavigator() {
  return (
    <Drawer.Navigator drawerPosition="right"  drawerType="back" drawerStyle={{
      backgroundColor: 'black',
      width: 240,
      
    }} drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="mainTabBar" component={MainTabBar} />
          
        </Drawer.Navigator>
  )
}


