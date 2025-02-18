import {View, Text, Image, TouchableOpacity, ViewBase,Animated,Easing, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default function BlackFridayModal() {
  const [ModalVisible, setModalVisible] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [showCross, setShowCross] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    let timer;
    if (isVisible) {
      setCountdown(4); // Reset countdown every time modal opens
      setShowCross(false);
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev === 1) {
            clearInterval(timer);
            setShowCross(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setModalVisible(true);
      const hideTimer = setTimeout(() => {
        setModalVisible(false);
      },1000000); // Hide the modal after 3 seconds
      return () => clearTimeout(hideTimer);
    }); // Show the modal after 3 seconds

    return () => clearTimeout(showTimer);
  }, []);
  const toggleModal = () => {
    setModalVisible(!ModalVisible);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity value
      duration: 2000, // Duration of the animation in milliseconds
      easing: Easing.ease, // Easing function for smooth animation
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView>
      <Modal
        onPress={() => navigation.navigate('BlackFridaySale')}
        isVisible={ModalVisible}
        onBackdropPress={toggleModal}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BlackFridaySale')}>
          <View
            style={{
              backgroundColor: 'rgba(42, 42, 42, 1)',
              height:verticalScale(285),
              width:scale(280),
              alignItems: 'center',
              borderRadius: 28,
            }}>
            <View >
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  width:scale(20),
                  height:verticalScale(20),
                  borderRadius:100,
                  backgroundColor: 'red',
                  marginLeft:scale(230),
                  marginTop:verticalScale(10),
                  justifyContent:'center',
                }}>
                {showCross ? (
                  <TouchableOpacity onPress={handleClose}>
                    <Text style={{textAlign:'center',color:'white',fontSize:responsiveScreenFontSize(2)}}>×</Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{textAlign:'center',color:'white',fontSize:responsiveScreenFontSize(2)}}>{countdown}</Text>
                )}
              </View>
              <Image
                style={{zIndex: 0,width:scale(280),height:verticalScale(160)}}
                source={require('../../../assets/images/blackFridayModalimage.png')}></Image>
            </View>
            <View>
              <Animated.View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',color: 'rgba(255, 206, 80, 1)',fontSize:responsiveScreenFontSize(2.5)}}>( 16/07/24 - 17/07/24 )</Text>
                <Text style={{color:'white',fontSize:responsiveScreenFontSize(2),fontWeight:'bold'}}>FLAT</Text>
                <Text style={{textShadowColor: 'white',textShadowOffset: { width:scale(1.5), height:verticalScale(1.5) }, textShadowRadius: 3,fontWeight:'bold',color: 'rgba(217, 36, 36, 1)', fontSize:responsiveScreenFontSize(4)}}>
                  50% 0ff
                </Text>
              </Animated.View>
              <TouchableOpacity
                onPress={toggleModal}
                style={{
                  width:scale(40),
                  height:verticalScale(19),
                  borderRadius: 9,
                  backgroundColor: 'red',
                  marginLeft:scale(200),
                  justifyContent:'center'
                }}>
                <Text
                  style={{fontWeight:'bold',color: 'white',textAlign:'center'}}>
                  SKIP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
