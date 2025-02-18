import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import ShoesSizeChart from './ShoessizeChart'

export default function SizeChart() {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',width:'100%',height:responsiveHeight(20),backgroundColor:'white',borderBottomEndRadius:20,borderBottomLeftRadius:20,elevation: 13,}}>
        <Image style={{marginLeft:responsiveWidth(10),height:responsiveHeight(7)}} source={require('../../assets/images/Shoesimage.png')}></Image>
        <View style={{justifyContent:'center',marginLeft:responsiveWidth(9),height:responsiveHeight(6)}}>
            <Text>Roadster Mens white sneakers</Text>
            <View style={{marginTop:responsiveHeight(0.4),flexDirection:'row',justifyContent:'space-around',width:responsiveWidth(35)}}>
                <Text>MRP</Text>
                <Text style={{textDecorationLine:'line-through'}}>Rs.899</Text>
                <Text style={{fontWeight:'bold',color:'black'}}> Rs.899</Text>
            </View>
        </View>
      </View>
      <ShoesSizeChart/>
    </View>
  )
}