import React from 'react'
import { View,Text,StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Shirts = ({navigation}) => {
  const valueToPass = ['Top_Tab_Navigation','Shirts'];
  const singleproduct = () => {
    navigation.navigate('SingleProducts',{data:valueToPass})
  }
    const arr = [1,2,3,4];
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
        <View style={styles.main}>
        <View style={styles.imagesliderheader}>
        <Text style={{color:'white',fontSize:hp('2.4%'),letterSpacing:hp('0.3%')}}>Trends, In Demand</Text>
        </View>
        <View style={styles.imagecontainer}>
        <Image source={require('../../assets/mens_categories_images/Group1000001775.png')} resizeMode='cover'/>
        </View>
        <View style={{flex:1,marginTop:hp('2.2%'),flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
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
export default Shirts

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
    borderTopRightRadius:wp('0.5%'),
    borderTopLeftRadius:wp('0.9%')
},
imagecontainer:{
  height:hp('20%'),
  width:wp('100%'),
  justifyContent:'center',
  alignItems:'center',
},
productcontainer:{
  height:hp('30%'),
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
  borderRadius:wp('4%'),
  overflow:'hidden',
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'center'
},
cart:{
  position:'absolute',
  width:wp('12%'),
  height:hp('22%'),
  zIndex:1,
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center',
  right:wp('2%')
}
})
