import React,{createContext, useState} from 'react'
import { View,Text, TouchableOpacity,StyleSheet, Image, TextInput } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const Mycontext = createContext();
const TopTabHeader = ({navigation,setSearchText}) => {
  const [searchText, setLocalSearchText] = useState('');
  const handleSearchTextChange = (value) => {
    setLocalSearchText(value);
    setSearchText(value);
  };
  return (
    <View style={styles.main}>
      <View style={styles.firts}>
      <TouchableOpacity onPress={()=>navigation.navigate('BottomTabNevigation2',{Screen:'About'})}><FontAwesome6 name='arrow-left-long' size={wp('6%')} color={'black'} /></TouchableOpacity>
      </View>
      <View style={styles.second}>
        <View style={styles.second1}>
        <AntDesign name='search1' size={wp('5%')} color={'black'}/>
        <View style={{overflow:'hidden',overflow:'hidden',width:wp('40%')}}>
        <TextInput placeholder='Search Product here...' value={searchText} onChangeText={handleSearchTextChange} />
        </View>
        </View>
      </View>
      <View style={styles.third}>
      <TouchableOpacity onPress={()=>navigation.navigate('Favourite')}><AntDesign name='hearto' size={wp('7%')} color={'black'}/></TouchableOpacity>
      <View style={styles.cart}>
      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}><SimpleLineIcons name='handbag' size={wp('6%')} color={'black'}/></TouchableOpacity>
      <View style={styles.count}><Text style={{color:'white'}}>0</Text></View>
      </View>
      </View>
    </View>
  )
}
export default TopTabHeader

const styles = StyleSheet.create({
  main:{
    height:hp('9%'),
    borderBottomWidth:wp('0.6%'),
    borderBottomColor:'grey',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:hp('1%'),
    backgroundColor:'white'
  },
  firts:{
    marginLeft:wp('2%')
  },
  second:{
    flex:4,
    height:hp('5%'),
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginHorizontal:wp('6%'),
    backgroundColor:'white',
    elevation:10,
    borderRadius:hp('1.5%'),
  },
  second1:{
    flexDirection:'row',
    alignItems:'center',
  },
  third:{
    flex:2,
    height:hp('4%'),
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  cart:{
    width:wp('10%'),
    flexDirection:'row',
  },
  count:{
    height:hp('2%'),
    width:wp('4%'),
    borderRadius:wp('100%'),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
  }
})