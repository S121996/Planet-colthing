import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {scale, verticalScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.overlay}>
      <View
          style={{
            backgroundColor: 'rgba(93, 23, 55, 1)',
            height: verticalScale(140),
            width: responsiveScreenWidth(100),
            flexDirection: 'row',
          
          }}>
          <TouchableOpacity>
            <View style={[styles.onetwo,{marginTop:verticalScale(45),marginLeft:scale(10)}]}>
              <Image
                source={require('../../assets/mens_categories_images/Layer_1.png')}
                style={{
                  height: responsiveWidth(15),
                  width: responsiveWidth(15),
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={{marginLeft:scale(40),justifyContent:'space-evenly'}}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <View
              style={{
                borderRadius: scale(5),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                height: verticalScale(40),
                width: scale(150),
              }}>
              <Text
                style={{color: 'black',fontWeight:'bold', fontSize: responsiveScreenFontSize(2)}}>
                LOG IN / REGISTER
              </Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: verticalScale(200),
            width: responsiveScreenWidth(100),
            marginTop: verticalScale(40),
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('OrderSummary')}>
            <View
              style={{
                flexDirection: 'row',
                height: verticalScale(40),
                alignItems: 'center',
                marginLeft: scale(20),
              }}>
              <View>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/mens_categories_images/newFrame.png')}
                />
              </View>
              <View style={{marginLeft: scale(30)}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: responsiveScreenFontSize(2),
                  }}>
                  Orders
                </Text>
              </View>
              <View style={{marginLeft: scale(190)}}>
                <AntDesign name="right" size={scale(20)} color={'black'} />
              </View>
            </View>
            <View style={{marginLeft: scale(65), bottom: verticalScale(5)}}>
              <Text>Your Orders are here</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.container}>
            <View style={styles.line} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
            <View
              style={{
                flexDirection: 'row',
                height: verticalScale(40),
                alignItems: 'center',
                marginLeft: scale(20),
              }}>
              <View>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/mens_categories_images/Vector.png')}
                />
              </View>
              <View style={{marginLeft: scale(30)}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: responsiveScreenFontSize(2),
                  }}>
                  WishList
                </Text>
              </View>
              <View style={{marginLeft: scale(180)}}>
                <AntDesign name="right" size={scale(20)} color={'black'} />
              </View>
            </View>
            <View style={{marginLeft: scale(65), bottom: verticalScale(5)}}>
              <Text>Your most loved styles</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.container}>
            <View style={styles.line} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('WhatsNew')}>
            <View
              style={{
                flexDirection: 'row',
                height: verticalScale(40),
                alignItems: 'center',
                marginLeft: scale(20),
              }}>
              <View>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/mens_categories_images/image124.png')}
                />
              </View>
              <View style={{marginLeft: scale(30)}}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: responsiveScreenFontSize(2),
                  }}>
                  What's new
                </Text>
              </View>
              <View style={{marginLeft: scale(160)}}>
                <AntDesign name="right" size={scale(20)} color={'black'} />
              </View>
            </View>
            <View style={{marginLeft: scale(65), bottom: verticalScale(5)}}>
              <Text>Check new arrival products</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.line} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: verticalScale(110),
              width: scale(280),
              marginTop: verticalScale(10),
              borderRadius: responsiveWidth(2),
              borderWidth: responsiveWidth(0.2),
              borderColor: 'rgba(207, 132, 207, 207)',
              elevation: 13,
              backgroundColor: 'white',
              justifyContent: 'space-evenly',
              marginBottom: responsiveHeight(3),
            }}>
            <View
              style={{
                marginLeft: scale(10),
                height: 90,
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: responsiveScreenFontSize(2.2),
                    fontWeight: 'bold',
                  }}>
                  About us
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: responsiveScreenFontSize(2.2),
                    fontWeight: 'bold',
                  }}>
                  Terms Of Use
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: responsiveScreenFontSize(2.2),
                    fontWeight: 'bold',
                  }}>
                  Privecy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: heightPercentageToDP(100),
  },
  overlay: {
    flex: 1,
    bottom: 0,
    width: '100%',
  },
  one: {
    marginTop: verticalScale(60),
    flexDirection: 'col',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  onetwo: {
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(100),
    borderWidth: 3,
    borderColor: 'rgba(93, 23, 55, 1)',
    position: 'relative',
    bottom: responsiveHeight(3),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%', 
    height: 1, 
    backgroundColor: 'black', 
  },
});

export default Profile;
