import React from 'react'
import { View,Text,StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const HomeSection = ({navigation}) => {
    const arr = [1,2,3,4];
    const valueToPass = ["Top_Tab_Navigation",'HomeSection'];
    const singleproduct = () => {
        navigation.navigate('SingleProducts', { data: valueToPass });
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{backgroundColor:'white',flex:1}}>
        <View style={styles.main}>
        <View style={styles.imageslider}>
        <View style={styles.imagesliderheader}>
        <Text style={{color:'white',fontSize:hp('2.4%'),letterSpacing:hp('0.3%')}}>Trends, In Demand</Text>
        </View>
        <View style={styles.imagecontainer}>
        <Image source={require('../../assets/mens_categories_images/Group1000001775.png')} style={{height:hp('20%'),width:wp('100%'),resizeMode:'cover'}}/>
        </View>
        </View>
        <View style={styles.discount}>
        <View style={styles.circle}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        </View>
        <View style={styles.discount1}>
        <Text style={{color:'black'}}>FlAT 200 OFF</Text>
        </View>
        <View style={styles.discount2}>
        <Text style={{backgroundColor:'pink',borderRadius:wp('1%')}}>...........................</Text>
        </View>
        </View>
        <View style={styles.products}>
        <ScrollView>
        <View style={styles.scrollview}>
        {arr.map((item,index)=><View style={styles.productcontainer} key={index}>
        <View style={styles.productimage}>
        <View style={styles.cart}>
        <View><TouchableOpacity><Image source={require('../../assets/mens_categories_images/Vector.png')}/></TouchableOpacity></View>
        <View><TouchableOpacity><Image source={require('../../assets/mens_categories_images/Addtocart.png')}/></TouchableOpacity></View>
        </View>
        <TouchableOpacity onPress={singleproduct}><Image source={require('../../assets/mens_categories_images/temp.png')} style={{height:hp('20%'),width:wp('40%'),resizeMode:'cover'}}/></TouchableOpacity>
        </View>
        <View style={styles.producttext}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:hp('2%')}}>Casual Jeans</Text>
        <Text>RS 989</Text>
        </View>
        </View>)}
        </View>
        </ScrollView>
        </View>
        </View>
        </View>
        </SafeAreaView>
   )
}
export default HomeSection

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:wp('3%'),
        borderTopRightRadius:wp('3%'),
        marginTop:hp('1%')
    },
    imageslider:{
        flex:1,
    },
    imagesliderheader:{
        backgroundColor:'black',
        flex:1,
        orderTopLeftRadius:wp('2%'),
        borderTopRightRadius:wp('2%'),
        justifyContent:'center',
        alignItems:'center'
    },
    imagecontainer:{
        flex:3.8
    },
    discount:{
        flex:0.5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    circle:{
        position:'absolute',
        zIndex:1,
        height:hp('8%'),
        width:wp('7%'),
        flexDirection:'column',
        justifyContent:'space-between'
    },
    circle1:{
        height:hp('3%'),
        width:wp('6%'),
        borderRadius:wp('2%'),
        backgroundColor:'white',
    },
    circle2:{
        height:hp('3%'),
        width:wp('6%'),
        borderRadius:wp('2%'),
        backgroundColor:'white',
    },
    discount1:{
        flex:1,
        backgroundColor:'white',
        height:hp('5%'),
        width:wp('50%'),
        shadowOffset: { width: wp('0%'), height: hp('4%') },
        shadowOpacity: 1,
        shadowRadius: 0, 
        elevation: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    discount2:{
        flex:1,
        backgroundColor:'#D6DAC8',
        height:hp('5%'),
        width:wp('50%'),
        justifyContent:'center',
        alignItems:'center'
    },
    products:{
        flex:2.1,
        overflow:'hidden'
    },
    scrollview:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    productcontainer:{
        height:hp('30%'),
        width:wp('40%'),
        margin:wp('3%')
    },
    productimage:{
        flex:4,
        borderRadius:wp('4%'),
        overflow:'hidden'
    },
    producttext:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    cart:{
        position:'absolute',
        width:wp('13%'),
        height:hp('18%'),
        zIndex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        right:wp('3%'),
        top:hp('1%')
      }
})