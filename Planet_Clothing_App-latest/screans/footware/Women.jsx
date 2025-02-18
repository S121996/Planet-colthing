import React from 'react'
import { View,Text,StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
const Women = ({navigation}) => {
  const valueToPass = ["Top_Tab_Navigation_Footware",'Women'];
    const singleproduct = () => {
        navigation.navigate('SingleProducts',{data:valueToPass})
    }
    const arr = [1,2,3,4];
    /* temperory object */
    const imagemap = {
      one: require('../../assets/images/Shoesimage1.png'),
      two: require('../../assets/images/Shoesimage2.png'),
      three: require('../../assets/images/Shoesimage4.png'),
      four: require('../../assets/images/Shoesimage7.png'),
  }
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
        <View style={styles.main}>
        <View style={styles.imagesliderheader}>
        <Text style={{color:'white',fontSize:responsiveFontSize(2),letterSpacing:responsiveFontSize(0.2)}}>Trends, In DemandF</Text>
        </View>
        <View style={styles.imagecontainer}>
        <Image source={require('../../assets/images/ShopNowShoes.png')} resizeMode='cover'/>
        </View>
        <View style={{flex:1,marginTop:responsiveHeight(3),flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        {arr.map((item,index)=><View style={styles.productcontainer} key={index}>
        <View style={styles.productimage}>
        <View style={styles.cart}>
        <View><TouchableOpacity><Image source={require('../../assets/mens_categories_images/Vector.png')}/></TouchableOpacity></View>
        <View><TouchableOpacity><Image source={require('../../assets/mens_categories_images/Addtocart.png')}/></TouchableOpacity></View>
        </View>
        <TouchableOpacity onPress={singleproduct}><Image source={item === 1 ? imagemap.one : item === 2 ? imagemap.two :item === 3 ? imagemap.three :item === 4 ? imagemap.four : null}  resizeMode='cover'/></TouchableOpacity>
        </View>
        <View style={styles.producttext}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:responsiveFontSize(2)}}>White Tshirt</Text>
        <Text>RS 989</Text>
        </View>
        </View>)}
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
   )
}
export default Women

const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'white',
      marginTop:responsiveHeight(2)
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
    height:responsiveHeight(5),
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:responsiveWidth(1.7),
    borderTopLeftRadius:responsiveWidth(1.7)
},
imagecontainer:{
  height:responsiveHeight(22),
  width:responsiveWidth(100),
  justifyContent:'center',
  alignItems:'center'
},
productcontainer:{
  height:responsiveHeight(25),
  width:responsiveHeight(20),
  margin:responsiveWidth(4)
},
producttext:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
},
productimage:{
  flex:4,
  borderRadius:responsiveWidth(3),
  overflow:'hidden',
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'center'
},
cart:{
  position:'absolute',
  width:'30%',
  height:'90%',
  zIndex:1,
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center',
  right:'5%'
}
})
