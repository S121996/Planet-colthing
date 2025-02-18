import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

export default function OrderDetails() {
  return (
    <View style={{backgroundColor:'white'}}>
        <ScrollView>
      <View
          style={{
            height:verticalScale(2),
            width:responsiveScreenWidth(100),
            backgroundColor: 'rgba(227, 222, 222, 1)', // Color of the line
          }}
        />
        <View style={{height:verticalScale(40),width:responsiveScreenWidth(100),justifyContent:'center',marginLeft:scale(30)}}>
            <Text style={{fontSize:responsiveScreenFontSize(2)}}>Order ID-08754355XEXR67HB</Text>
        </View>
        <View
          style={{
            height:verticalScale(1),
            width:responsiveScreenWidth(100),
            backgroundColor: 'rgba(227, 222, 222, 1)', // Color of the line
          }}
        />
        <View style={{height:verticalScale(130),flexDirection:'row',justifyContent:'space-around',alignItems: 'center'}}>
            <View>
              <Text style={{color:'black',fontSize:responsiveScreenFontSize(2.5)}}>Cotton mens shirt</Text>
              <View style={{marginTop:verticalScale(10),height:verticalScale(45),justifyContent:'space-around'}}>
              <Text style={{fontSize:responsiveScreenFontSize(1.8)}}>Black</Text>
              <Text style={{fontSize:responsiveScreenFontSize(1.8)}}>Seller:PrimeShop2024</Text>
              </View>
              <Text style={{color:'black',fontSize:responsiveScreenFontSize(2.5),marginTop:verticalScale(15)}}>Rs.599</Text>
            </View>
            <View>
                <Image source={require('../../assets/tempimages/Capture1.png')}></Image>
            </View>
        </View>
        <View  style={{height:verticalScale(50),backgroundColor:'rgba(233, 157, 194, 1)',width:responsiveScreenWidth(100),flexDirection:'row',alignItems:'center'}}>
             <Image style={{marginLeft:scale(30)}} source={require('../../assets/tempimages/GreenTick.png')}></Image>
             <Text style={{marginLeft:scale(15),color:'black',fontSize:responsiveScreenFontSize(2),fontWeight:'bold'}}>Delivery was made with OTP verification</Text>
        </View>
        <View style={{height:verticalScale(170),width:responsiveScreenWidth(100)}}>
               <View style={{flexDirection:'row'}}>
                <View style={{width:scale(16),marginLeft:scale(30),marginTop:verticalScale(30)}}>
                    <Image source={require('../../assets/tempimages/GreenTick.png')}></Image>
                    <Image style={{marginLeft:scale(8)}} source={require('../../assets/tempimages/GreenLIne.png')}></Image>
                    <Image source={require('../../assets/tempimages/GreenTick.png')}></Image>
                </View>
                <View style={{marginTop:verticalScale(31),marginLeft:scale(13),height:verticalScale(50),justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontSize:responsiveScreenFontSize(2),fontWeight:'bold'}}>Order Conformed, Mar 09</Text>
                    <Text style={{color:'black',fontSize:responsiveScreenFontSize(2),fontWeight:'bold'}}>Delivered, Mar 12</Text>
                </View>
               </View>
               <View style={{flexDirection:'row',marginTop:verticalScale(40),marginLeft:scale(30),width:scale(160),justifyContent:'space-between'}}>
                <Image source={require('../../assets/tempimages/fillStar.png')}></Image>
                <Image source={require('../../assets/tempimages/fillStar.png')}></Image>
                <Image source={require('../../assets/tempimages/fillStar.png')}></Image>
                <Image source={require('../../assets/tempimages/fillStar.png')}></Image>
                <Image source={require('../../assets/tempimages/WhiteStar.png')}></Image>
               </View>
        </View>
        <View
          style={{
            height:verticalScale(2),
            width:responsiveScreenWidth(100),
            backgroundColor: 'rgba(233, 157, 194, 1)', // Color of the line
          }}
        />
        <View style={{height:verticalScale(45),width:responsiveScreenWidth(100),justifyContent:'center'}}>
            <Text style={{fontSize:responsiveScreenFontSize(2.5),marginLeft:scale(30),color:'black',fontWeight:'bold'}}>Shipping Details</Text>
        </View>
        <View
          style={{
            height:verticalScale(2),
            width:responsiveScreenWidth(100),
            backgroundColor: 'rgba(233, 157, 194, 1)', // Color of the line
          }}
        />
        <View style={{height:verticalScale(130),justifyContent:'center',marginLeft:scale(30)}}>
            <Text style={{color:'black',fontSize:responsiveScreenFontSize(2.5),fontWeight:'bold'}}>Kamal</Text>
            <View style={{padding:3,height:verticalScale(90),justifyContent:'space-between'}}>
                <Text style={{fontSize:responsiveScreenFontSize(1.9)}}>3711 Spring Hill Rd undefined Tallahassee,</Text>
                <Text style={{fontSize:responsiveScreenFontSize(1.9)}}>Nevada 52874 Delhi </Text>
                <Text style={{fontSize:responsiveScreenFontSize(1.9)}}>Mobile number:</Text>
                <Text style={{fontSize:responsiveScreenFontSize(1.9)}}>+99 1234567890</Text>
            </View>
        </View>
        <View
          style={{
            height:verticalScale(2),
            width:responsiveScreenWidth(100),
            backgroundColor: 'rgba(233, 157, 194, 1)', // Color of the line
          }}
        />
        <View style={{height:verticalScale(40),justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',color:'black',fontSize:responsiveScreenFontSize(2.4),marginLeft:scale(30)}}>Price Details</Text>
        </View>
        <View
          style={{
            height:verticalScale(2),
            width:responsiveScreenWidth(100),
            backgroundColor: 'rgba(233, 157, 194, 1)', // Color of the line
          }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-around'}}       >
            <View>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Bag Total  </Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Bag Savings</Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Coupon Savings  </Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Delivery Fee </Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>Platform Fee</Text>
            </View>
            <View>
            <Text style={{fontSize:responsiveScreenFontSize(2)}}>  Rs.899.00 </Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}> Rs.299.00</Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}> Apply coupon </Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}>  FREE Rs.50</Text>
                <Text style={{fontSize:responsiveScreenFontSize(2)}}> Rs.19.00</Text>
            </View>
        </View>
        <View style={{marginTop:verticalScale(21),flexDirection:'row',justifyContent:'space-around'}}>
            <View>
             <Text style={{color:'black',fontSize:responsiveScreenFontSize(2.5),fontWeight:'bold'}}>Total Amount</Text>
            </View>
            <View>
              <Text style={{color:'black',fontSize:responsiveScreenFontSize(2.5),fontWeight:'bold'}}>Rs.599.00</Text>
            </View>
        </View>
        </ScrollView>
    </View>
  )
}