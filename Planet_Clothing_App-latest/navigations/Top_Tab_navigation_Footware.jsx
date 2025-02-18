import React,{useState} from 'react'
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import TopTabHeader from '../component/header/TopTabHeader';
import TopTabScreenFootware from '../screans/toptab/TopTabScreenFootware';
import HomeScreenFootware from '../screans/footware/HomeScreenFootware';
import Men from '../screans/footware/Men';
import Women from '../screans/footware/Women';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Searchproducts from '../component/searchitem/searchproducts';
import { Mycontext } from '../component/header/TopTabHeader';
const Top_Tab_Navigation_Footware = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Mycontext.Provider value={searchText}>
    <View style={{ flex: 1 }}>
    <TopTabHeader navigation={navigation} setSearchText={setSearchText}/>
    <View style={{position:'absolute',top:responsiveHeight(9),zIndex:10}}>
    <Searchproducts/>
    </View>
    <Tab.Navigator tabBar={(props) => <TopTabScreenFootware {...props} />}>
    <Tab.Screen name='HomeScreenFootware' component={HomeScreenFootware}/>
    <Tab.Screen name='Men' component={Men}/>
    <Tab.Screen name='Women' component={Women}/>
  </Tab.Navigator>
  </View>
  </Mycontext.Provider>
  )
}
export default Top_Tab_Navigation_Footware