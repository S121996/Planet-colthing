import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

import React from 'react'

export default function ShoesSizeChart() {
  return (
    <ScrollView>
    <View>
     <View style={{justifyContent:'center',backgroundColor:'rgba(233, 157, 194, 1)',height:responsiveHeight(10),width:'100%',marginTop:responsiveHeight(5)}}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:responsiveFontSize(2.4),marginLeft:responsiveWidth(8)}}>Size Chart</Text>
      </View>
      <View style={{padding:13,marginTop:responsiveHeight(3)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.footsize}>UK</Text>
            <Text style={styles.footsize} > To Fit Foot Length (cm)</Text>
            <Text style={styles.footsize}>(in)</Text>
        </View>
        <View style={styles.horizontalline}></View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(1)}} >
            <View>
                <Text style={styles.footsize}>6</Text>
                <Text style={styles.footsize}>7</Text>
                <Text style={styles.footsize}>8</Text>
                <Text style={styles.footsize}>9</Text>
                <Text style={styles.footsize}>10</Text>
                <Text style={styles.footsize}>11</Text>
            </View>
            <View>
                <Text style={styles.footsize}>27.3</Text>
                <Text style={styles.footsize}>28.0</Text>
                <Text style={styles.footsize}>28.6</Text>
                <Text style={styles.footsize}>29.3</Text>
                <Text style={styles.footsize}>30.0</Text>
                <Text style={styles.footsize}>30.6</Text>
            </View>
            <View>
                <Text style={styles.footsize}>10.7</Text>
                <Text style={styles.footsize}>11.0</Text>
                <Text style={styles.footsize}>11.3</Text>
                <Text style={styles.footsize}>11.5</Text>
                <Text style={styles.footsize}>11.8</Text>
                <Text style={styles.footsize}>12</Text>
            </View>
        </View>
        </View>
        <View style={{justifyContent:'center',width:'100%',backgroundColor:'rgba(233, 157, 194, 1)',height:responsiveHeight(10)}}>
         <Text style={{color:'black',fontWeight:'bold',fontSize:responsiveFontSize(2.4),marginLeft:responsiveWidth(8)}}>How to Measure</Text>
        </View>
        <View style={{alignSelf:'center',marginTop:responsiveHeight(3)}}>
            <Image source={require('../../assets/images/Footimage.png')}></Image>
        </View>
    </View>
    </ScrollView>
  )
}
const styles= StyleSheet.create({
    footsize:{
        color:'black',
        fontSize:responsiveFontSize(2)
    },
    horizontalline:{
        width:'100%',
        backgroundColor:'gray',
        height:responsiveHeight(0.2),
        marginTop:responsiveHeight(1)
    }
})