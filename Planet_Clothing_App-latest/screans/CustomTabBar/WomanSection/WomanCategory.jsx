import * as React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopWear from './TopWear';
import CustomTabBar from './CustomTabBar';
import Woman from './Woman';
import { Image} from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth} from 'react-native-responsive-dimensions';
import BottomWear from './BottomWear';
import PartyWear from './PartyWear';
import { verticalScale } from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();
const ManIcon = require('../../../assets/mens_categories_images/Ellipse416.png');

export default function WomanCategory() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} screen/>} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Woman') {
          return (
            <View style={{justifyContent:'center',alignItems:'center',marginTop:responsiveScreenHeight(2),backgroundColor:'white',height:responsiveScreenHeight(4.6),width:responsiveScreenWidth(16),borderRadius:5}}>
            <Image
              source={ManIcon}
              style={{ marginTop:verticalScale(1),width: responsiveScreenWidth(11),height:responsiveScreenHeight(5)}}
            resizeMode='contain'
            />
            </View>
          );
        }
        // Add icons for other tabs if needed
        return null;
      },
      tabBarLabel: route.name === 'Woman' ? '' : route.name,
    })} >
    <Tab.Screen name="Woman" component={Woman}  />
      <Tab.Screen name="TopWear" component={TopWear}  />
      <Tab.Screen name="BottomWear" component={BottomWear}  />
      <Tab.Screen name="PartyWear" component={PartyWear} />
    </Tab.Navigator>
  );
}


