import * as React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Man from './Man';
import Woman from './Woman'
import CustomTabBar from './CustomTabBar';
import FootWear from './FootWear';
import { Image } from 'react-native';
import { responsiveScreenWidth,responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { verticalScale } from 'react-native-size-matters';


const Tab = createMaterialTopTabNavigator();
const ManIcon = require('../../../assets/images/man.png');

export default function FootWearCategory() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} screen/>} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'FootWear') {
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
      tabBarLabel: route.name === 'FootWear' ? '' : route.name,
    })} >
    <Tab.Screen name="FootWear" component={FootWear}  />
      <Tab.Screen name="Man" component={Man}  />
      <Tab.Screen name="woman" component={Woman}  />
    </Tab.Navigator>
  );
}


