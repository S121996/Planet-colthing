import React from 'react'
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();

import DrawerScrean from '../screans/drawerscrean/DrawerScrean';
import BottomTabNevigation2 from './BottomTabNevigation2';

const DrawerTabNaviagtion = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=><DrawerScrean{...props}/>} screenOptions={{drawerStyle:{width:responsiveWidth(70)}}}>
    <Drawer.Screen name='BottomTabNevigation2' component={BottomTabNevigation2} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerTabNaviagtion
