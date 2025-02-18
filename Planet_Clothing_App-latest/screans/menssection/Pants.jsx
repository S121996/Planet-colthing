import React from 'react'
import { View,Text,StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Pants = ({navigation}) => {
    const arr = [1,2,3,4];
    const valueToPass = ["Top_Tab_Navigation",'Pants'];
    const singleproduct = () => {
      navigation.navigate('SingleProducts', { data: valueToPass });
  }
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
        <View style={styles.main}>
        <View style={styles.imagesliderheader}>
        <Text style={{color:'white',fontSize:hp('2%'),letterSpacing:hp('0.3%')}}>Trends, In Demand</Text>
        </View>
        <View style={styles.imagecontainer}>
        <Image source={require('../../assets/mens_categories_images/Group1000001775.png')} resizeMode='cover'/>
        </View>
        <View style={{flex:1,marginTop:hp('3%'),flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        {arr.map((item,index)=><View style={styles.productcontainer} key={index}>
        <View style={styles.productimage}>
        <View style={styles.cart}>
        <View><TouchableOpacity><Image source={require('../../assets/mens_categories_images/Vector.png')}/></TouchableOpacity></View>
        <View><TouchableOpacity><Image source={require('../../assets/mens_categories_images/Addtocart.png')}/></TouchableOpacity></View>
        </View>
        <TouchableOpacity onPress={singleproduct}><Image source={require('../../assets/mens_categories_images/temp.png')} resizeMode='cover'/></TouchableOpacity>
        </View>
        <View style={styles.producttext}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:hp('2%')}}>Casual Jeans</Text>
        <Text>RS 989</Text>
        </View>
        </View>)}
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
   )
}
export default Pants

const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'white',
      marginTop:hp('2%')
    },
    scrollView: {
      flex: 1,
      backgroundColor:'white'
  },
  scrollViewContent: {
      flexGrow: 1,
  },
  imagesliderheader:{
    backgroundColor:'black',
    height:hp('5%'),
    width:wp('100%'),
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:wp("2%"),
    borderTopLeftRadius:wp('2%')
},
imagecontainer:{
  height:hp('22%'),
  width:wp('100%'),
  justifyContent:'center',
  alignItems:'center'
},
productcontainer:{
  height:hp('29%'),
  width:wp('40%'),
  margin:wp('4%')
},
producttext:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
},
productimage:{
  flex:4,
  borderRadius:wp('3%'),
  overflow:'hidden',
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'center'
},
cart:{
  position:'absolute',
  width:wp('16%'),
  height:hp('22%'),
  zIndex:1,
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center',
  right:wp('1%')
}
})