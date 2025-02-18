import React,{useState} from 'react'
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import TopTabHeader from '../component/header/TopTabHeader';
import TopTabScreenWomens from '../screans/toptab/TopTabScreenWomens';
import HomeScreenWomens from '../screans/womensection/HomeScreenWomens';
import TopWear from '../screans/womensection/TopWear';
import BottomWear from '../screans/womensection/BottomWear';
import PartyWear from '../screans/womensection/PartyWear';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Searchproducts from '../component/searchitem/searchproducts';
import { Mycontext } from '../component/header/TopTabHeader';
const Top_Tab_Navigation_Womens = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Mycontext.Provider value={searchText}>
    <View style={{ flex: 1 }}>
    <TopTabHeader navigation={navigation} setSearchText={setSearchText}/>
    <View style={{position:'absolute',top:responsiveHeight(9),zIndex:10}}>
    <Searchproducts/>
    </View>
    <Tab.Navigator tabBar={(props) => <TopTabScreenWomens {...props} />}>
    <Tab.Screen name='HomeScreenWomens' component={HomeScreenWomens}/>
    <Tab.Screen name='TopWear' component={TopWear}/>
    <Tab.Screen name='BottomWear' component={BottomWear}/>
    <Tab.Screen name='PartyWear' component={PartyWear}/>
  </Tab.Navigator>
  </View>
  </Mycontext.Provider>
  )
}
export default Top_Tab_Navigation_Womens 