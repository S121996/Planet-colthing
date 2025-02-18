import React,{useState} from 'react'
import { View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Shirts from '../screans/menssection/Shirts';
import TShirts from '../screans/menssection/TShirts';
import Pants from '../screans/menssection/Pants';
import TopTabHeader from '../component/header/TopTabHeader';
import TopTabScrean from '../screans/toptab/TopTabScrean';
import HomeSection from '../screans/menssection/HomeSection';
import Searchproducts from '../component/searchitem/searchproducts';
import { Mycontext } from '../component/header/TopTabHeader';
const Top_Tab_Navigation = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Mycontext.Provider value={searchText}>
      <View style={{ flex: 1 }}>
      <TopTabHeader navigation={navigation} setSearchText={setSearchText}/>
      <View style={{position:'absolute',top:responsiveHeight(9),zIndex:10}}>
      <Searchproducts/>
      </View>
      <Tab.Navigator initialRouteName="HomeSection" tabBar={(props) => <TopTabScrean {...props} />}>
      <Tab.Screen name='HomeSection' component={HomeSection}/>
      <Tab.Screen name='Shirts' component={Shirts} />
      <Tab.Screen name='TShirts' component={TShirts}/>
      <Tab.Screen name='Pants' component={Pants}/>
    </Tab.Navigator>
    </View>
    </Mycontext.Provider>
  )
}
export default Top_Tab_Navigation
