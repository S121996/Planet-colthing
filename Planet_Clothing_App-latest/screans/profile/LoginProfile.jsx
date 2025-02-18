import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {UserContext} from '../../navigations/BottomTabNevigation2';
import {scale, verticalScale} from 'react-native-size-matters';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const LoginProfile = ({navigation}) => {
  const translateY = useSharedValue(Dimensions.get('window').height);
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const value = useContext(UserContext);
  const {width} = Dimensions.get('window');
  const diameter = width * 0.5; // Adjust the size as needed
  const radius = diameter / 2;

  const handleSelectImage = () => {
    launchImageLibrary({}, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0].uri);
        translateY.value = Dimensions.get('window').height;
        setModalVisible(false);
      }
    });
  };
  const handleTakePhoto = () => {
    launchCamera({}, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled photo picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0].uri);
        translateY.value = Dimensions.get('window').height;
        setModalVisible(false);
      }
    });
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withSpring(translateY.value, {damping: 5, stiffness: 20})},
      ],
    };
  });
  const handlePress = () => {
    translateY.value =
      translateY.value === Dimensions.get('window').height
        ? 0
        : Dimensions.get('window').height;
    setModalVisible(!modalVisible);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'rgba(93, 23, 55, 1)',
              height: verticalScale(140),
              width: responsiveScreenWidth(100),
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={handlePress}
              style={{marginTop: verticalScale(60), marginLeft: scale(10)}}>
              <View style={styles.onetwo}>
                {image ? (
                  <Image source={{uri: image}} style={styles.profileImage} />
                ) : (
                  <Image
                    resizeMode="contain"
                    source={require('../../assets/mens_categories_images/camera.png')}
                  />
                )}
              </View>
            </TouchableOpacity>
            <View
              style={{marginLeft: scale(40), justifyContent: 'space-evenly'}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  // backgroundColor:'red',
                  height: responsiveHeight(9),
                  width: scale(135),
                  marginLeft: scale(2),
                }}>
                <View style={{justifyContent: 'space-between'}}>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(2.5),
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Deepak
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: 'white'}}>www.googlehjvjhdvj.com</Text>
                    <Text style={{color: 'white'}}>+91 8927666566</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    height: verticalScale(40),
                    width: scale(142),
                    borderRadius: responsiveWidth(2),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: scale(2),
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: responsiveScreenFontSize(2.5),
                      fontWeight: 'bold',
                    }}>
                    Edit Profile
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.overlay,
              {
                backgroundColor: modalVisible ? 'grey' : null,
                opacity: modalVisible ? 0.5 : null,
              },
            ]}>
            <View
              style={{
                marginTop: verticalScale(30),
                height: verticalScale(290),
                width: responsiveScreenWidth(100),
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Order')}>
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
              </TouchableOpacity>

              <View style={styles.container}>
                <View style={styles.line} />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('Favourite')}>
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
              </TouchableOpacity>

              <View style={styles.container}>
                <View style={styles.line} />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('TheCoupon')}>
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
                      source={require('../../assets/mens_categories_images/Frame.png')}
                    />
                  </View>
                  <View style={{marginLeft: scale(30)}}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: responsiveScreenFontSize(2),
                      }}>
                      Coupons
                    </Text>
                  </View>
                  <View style={{marginLeft: scale(175)}}>
                    <AntDesign name="right" size={scale(20)} color={'black'} />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.container}>
                <View style={styles.line} />
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('Address')}>
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
                      source={require('../../assets/mens_categories_images/Address.png')}
                    />
                  </View>
                  <View style={{marginLeft: scale(30)}}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: responsiveScreenFontSize(2),
                      }}>
                      Address
                    </Text>
                  </View>
                  <View style={{marginLeft: scale(180)}}>
                    <AntDesign name="right" size={scale(20)} color={'black'} />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.container}>
                <View style={styles.line} />
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
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
                      source={require('../../assets/mens_categories_images/Layer3.png')}
                    />
                  </View>
                  <View style={{marginLeft: scale(30)}}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: responsiveScreenFontSize(2),
                      }}>
                      Notification
                    </Text>
                  </View>
                  <View style={{marginLeft: scale(160)}}>
                    <AntDesign name="right" size={scale(20)} color={'black'} />
                  </View>
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
                  height: verticalScale(100),
                  width: scale(230),
                  borderRadius: responsiveWidth(2),
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
                  <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                    <View>
                      <Text
                        style={{
                          fontSize: responsiveScreenFontSize(2.2),
                          fontWeight: 'bold',
                        }}>
                        About us
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>navigation.navigate('TermsOfUse')}>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(2.2),
                        fontWeight: 'bold',
                      }}>
                      Terms Of Use
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')}>
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

              <TouchableOpacity onPress={() => value.setisuser(!value.isuser)}>
                <View
                  style={{
                    backgroundColor: 'rgba(93, 23, 55, 1)',
                    height: verticalScale(30),
                    width: responsiveWidth(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: responsiveScreenWidth(2),
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: responsiveScreenFontSize(2),
                    }}>
                    Logout
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View style={[styles.footer, animatedStyle]}>
            <View
              style={{height: responsiveHeight(30), backgroundColor: 'white'}}>
              <View
                style={{
                  height: responsiveHeight(7),
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: 'bold',
                    color: 'black',
                    marginLeft: responsiveWidth(4),
                  }}>
                  EDIT PHOTO
                </Text>
                <TouchableOpacity
                  style={{marginRight: responsiveWidth(8)}}
                  onPress={handlePress}>
                  <AntDesign
                    name="close"
                    size={responsiveWidth(8)}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={handleSelectImage}>
                  <Image source={require('../../assets/images/Frame.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTakePhoto}>
                  <Image source={require('../../assets/images/image121.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
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
  },
  overlay: {
    flex: 1,
    bottom: 0,
    width: '100%',
  },
  one: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(60),
  },
  onetwo: {
    height: verticalScale(90),
    width: scale(90),
    borderRadius: responsiveScreenWidth(100),
    borderWidth: 3,
    borderColor: 'rgba(93, 23, 55, 1)',
    bottom: verticalScale(35),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  common1Css: {
    flex: 1,
    borderBottomWidth: 1.2,
    flexDirection: 'row',
  },
  common2Css: {
    marginLeft: scale(20),
    fontSize: responsiveScreenFontSize(2),
    color: 'black',
    fontWeight: 'bold',
  },
  common3Css: {
    flex: 3.5,
  },
 
  line: {
    width: '100%', 
    height: 1, 
    backgroundColor: 'black', 
  },
 
});

export default LoginProfile;
