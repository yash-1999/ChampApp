import React from "react"

import { DashBoardScreen} from "../screens"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../components/context/context';
import { DrawerContent } from './DrawerContent'


const Drawer = createDrawerNavigator();

export function TabNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="dashboard" component={DashBoardScreen} />
          
        </Drawer.Navigator>
  )
}


