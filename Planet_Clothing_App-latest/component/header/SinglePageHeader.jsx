import React, { useState } from 'react'
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';


const SinglePageHeader = ({navigation,data}) => {
  return (
    <View style={styles.main}>
      <View style={styles.firts}>
      <TouchableOpacity onPress={()=>{navigation.navigate(data[0],{ screen: data[1] })}}><FontAwesome6 name='arrow-left-long' size={responsiveWidth(6)} color={'black'} /></TouchableOpacity>
      </View>
      <View style={styles.cart}>
      <TouchableOpacity><SimpleLineIcons name='handbag' size={responsiveWidth(6)} color={'black'}/></TouchableOpacity>
      </View>
    </View>
  )
}
export default SinglePageHeader

const styles = StyleSheet.create({
  main:{
    height:responsiveHeight(8),
    borderBottomWidth:responsiveWidth(0.5),
    borderBottomColor:'grey',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:responsiveWidth(2),
    backgroundColor:'white',
    justifyContent:'space-between'
  },
  firts:{
    marginLeft:responsiveWidth(1.5)
  },
  cart:{
    width:'45%',
    flexDirection:'row',
    width:responsiveWidth(15)
  },
  count:{
    height:responsiveWidth(5),
    width:responsiveWidth(5),
    borderRadius:responsiveWidth(100),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
  }
})