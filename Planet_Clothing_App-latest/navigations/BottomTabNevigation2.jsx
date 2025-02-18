import { View,StyleSheet, TouchableOpacity, Image,Text } from 'react-native';
import React,{useState,createContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screans/Main';
import About from '../screans/About';
import Cart from '../screans/Cart';
import MyBottomTabBar from '../screans/bottomtab/MyBottomTabBar';
import Favourite from '../screans/Favourite';
import { SafeAreaView } from 'react-native';
import Profile from '../screans/profile/Profile';
import LoginProfile from '../screans/profile/LoginProfile';
import { responsiveHeight,responsiveScreenFontSize,responsiveScreenHeight,responsiveScreenWidth,responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const UserContext = createContext();
const Bottom = createBottomTabNavigator();

const BottomTabNevigation2 = () => {
  // Temprory user 
  const  navigation = useNavigation()
  const [isuser,setisuser] = useState(false)
  const CustomHeaderTitle = () => (
    <Text style={{color:'black',fontSize:responsiveScreenFontSize(2.7)}}>Categories</Text>
  );
  // Temprory user
  return (
    <UserContext.Provider value ={{isuser,setisuser}}>
    <View style={{flex:1,borderColor:'red',justifyContent:'flex-end'}}>
    <View style={{position:'absolute',zIndex:3,width:'100%',bottom:responsiveHeight(7)}}>
    <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.120)','rgba(0, 0, 0, 0.2)']}
        style={styles.shadow}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    </View>
    <Bottom.Navigator tabBar={(props)=><MyBottomTabBar {...props} 
    activeTintColor={'#A35A7D'}
    inactiveTintColor="black"
    />
    }>
    <Bottom.Screen name='Main' component={Main} options={{headerShown:false}}/>
    <Bottom.Screen name='About' component={About} options={{headerShown:true,headerTitle:() => <CustomHeaderTitle />,
      headerLeft:()=>(
        <View>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
               <Image resizeMode='contain'  style={{marginLeft:responsiveScreenWidth(3),height:responsiveScreenHeight(2.5),width:responsiveScreenWidth(7)}} source={require('../assets/images/Arrow.png')}    />
          </TouchableOpacity>
        </View>
      )
    }} />
    <Bottom.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
    <Bottom.Screen name='Favourite' component={Favourite} options={{headerShown:false}}/>
    {isuser ? <Bottom.Screen name='Profile' component={Profile} options={{headerShown:false}}/> : 
    <Bottom.Screen name='Profile' value={setisuser} component={LoginProfile} options={{headerShown:false}}/>
    }
    </Bottom.Navigator>
    </View>
    </UserContext.Provider>
  )
}

export default BottomTabNevigation2

const styles = StyleSheet.create({
  shadow: {
    position:'absolute',
    bottom:responsiveHeight(9),
    zIndex:3,
    bottom: 0,
    left: 0,
    right: 0,
    height: responsiveHeight(3.2)
  },
 
});
