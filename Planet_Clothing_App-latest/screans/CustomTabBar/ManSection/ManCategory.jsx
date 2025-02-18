import * as React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Shirts from './Shirts';
import TShirt from './TShirt';
import Pants from './Pants';
import CustomTabBar from './CustomTabBar';
import Man from './Man';
import { Image } from 'react-native';
import {  responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { verticalScale } from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();
const ManIcon = require('../../../assets/images/man.png');

export default function ManCategory() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} screen/>} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Man') {
          return (
            <View style={{justifyContent:'center',alignItems:'center',marginTop:responsiveScreenHeight(2),backgroundColor:'white',height:responsiveScreenHeight(4.6),width:responsiveScreenWidth(16),borderRadius:5}}>
            <Image
            resizeMode='contain'
              source={ManIcon}
              style={{marginTop:verticalScale(1),width: responsiveScreenWidth(11),height:responsiveScreenHeight(5)}}
            />
            </View>
          );
        }
        // Add icons for other tabs if needed
        return null;
      },
      tabBarLabel: route.name === 'Man' ? '' : route.name,
      
    })} >
    <Tab.Screen name="Man" component={Man}  />
      <Tab.Screen name="Shirts" component={Shirts}  />
      <Tab.Screen name="TShirt" component={TShirt}  />
      <Tab.Screen name="Pants" component={Pants} />
    </Tab.Navigator>
  );
}


