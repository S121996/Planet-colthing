import {View, Text, Image, TouchableOpacity, ViewBase,Animated,Easing} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveWidth
} from 'react-native-responsive-dimensions';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
      },4000); // Hide the modal after 3 seconds
      return () => clearTimeout(hideTimer);
    }); 

    return () => clearTimeout(showTimer);
  }, []);
  const toggleModal = () => {
    setModalVisible(!ModalVisible);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 2000, 
      easing: Easing.ease, 
      useNativeDriver: true, 
    }).start();
  }, [fadeAnim]);

  return (
    <View>
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
              height: hp('50%'),
              alignItems: 'center',
              borderRadius: 28,
            }}>
            <View >
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  width: wp('7%'),
                  height: hp('3%'),
                  borderRadius: responsiveWidth(100),
                  backgroundColor: 'red',
                  marginLeft: hp('40%'),
                  marginTop: hp('3%'),
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                {showCross ? (
                  <TouchableOpacity onPress={handleClose}>
                    <Text style={{color:'white',fontSize:hp('3%'),marginTop:hp('-0.6%')}}>×</Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{color:'white',fontSize:hp('3%'),marginTop:hp('-0.6%')}}>{countdown}</Text>
                )}
              </View>
              <Image
                style={{zIndex: 0}}
                source={require('./blackFridayModalimage.png')}></Image>
            </View>
            <View>
              <Animated.View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',color: 'rgba(255, 206, 80, 1)',fontSize:hp('3%'),marginTop:hp('2%')}}>( 16/07/24 - 17/07/24 )</Text>
                <Text style={{color:'white',fontSize:hp('3%'),fontWeight:'bold'}}>FLAT</Text>
                <Text style={{textShadowColor: 'white',textShadowOffset: { width: wp('1%'), height: hp('0.3%') }, textShadowRadius: 3,fontWeight:'bold',color: 'rgba(217, 36, 36, 1)', fontSize:hp('5%')}}>
                  50% 0ff
                </Text>
              </Animated.View>
              <TouchableOpacity
                onPress={toggleModal}
                style={{
                  width:wp('14%'),
                  height:hp('2.5%'),
                  borderRadius: 9,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft:wp('60%'),
                }}>
                <Text
                  style={{fontWeight:'bold',color: 'white', marginTop:hp('-0.5')}}>
                  SKIP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}