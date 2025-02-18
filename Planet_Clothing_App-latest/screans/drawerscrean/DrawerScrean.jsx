import React from 'react'
import { View,Text,StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native'
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions'
const DrawerScrean = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safearea}>
    <View style={styles.main}>
        <TouchableOpacity style={styles.button}><Text onPress={()=>navigation.navigate('Main')} style={styles.text}>Main</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text onPress={()=>navigation.navigate('About')} style={styles.text}>About</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text onPress={()=>navigation.navigate('Cart')} style={styles.text}>Cart</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text onPress={()=>navigation.navigate('Profile')} style={styles.text}>Profile</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default DrawerScrean

const styles = StyleSheet.create({
  safearea:{
    flex:1,
  },
  main:{
    padding:0,
    margin:0,
    flex:1,
    justifyContent:'center',alignItems:'center'
  },
  button:{
    height:responsiveHeight(5),width:responsiveWidth(30),
    backgroundColor:'black',
    borderRadius:responsiveWidth(1.5),
    justifyContent:'center',alignItems:'center',
    margin:responsiveHeight(2)
  },
  text:{
    fontSize:responsiveHeight(2),
    color:'white'
  },
})
