import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();

  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileNumberChange = (text) => {
    if (text.startsWith('+91 ')) {
      setMobileNumber(text);
    } else {
      setMobileNumber('+91 ' + text);
    }
  };

  const validateMobileNumber = () => {
    const mobileNumberPattern = /^\+91 [6-9]\d{9}$/;
    if (!mobileNumberPattern.test(mobileNumber)) {
      setErrorMessage('Please enter a valid mobile number.');
    } else {
      setErrorMessage('');
      console.log('Mobile number is valid:', mobileNumber);
      navigation.navigate('Verify');
      setMobileNumber('');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Wishlist');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image resizeMode='cover' source={require("../assets/images/backgroundimage1.png")} style={styles.topImage} />
      </View>
      <View>
         <TouchableOpacity
            onPress={handleSkip}
            style={[styles.skipButton,{backgroundColor:'white',width:responsiveScreenWidth(13),borderRadius:8,alignItems:'center',marginLeft:responsiveScreenWidth(80),bottom:responsiveScreenHeight(19)}]}>
            <Text style={[styles.skipButtonText,{color:'black'}]}>Skip</Text>
          </TouchableOpacity></View>
      <View>
        <Image style={styles.Logoimage} source={require("../assets/images/Logo.png")} />
      </View>
      <View>
        <Text style={styles.text}>Stay stylish with the latest fashion</Text>
      </View>
      <View>
        <Text style={styles.Logintext}>Login</Text>
      </View>
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Number"
          value={mobileNumber}
          onChangeText={handleMobileNumberChange}
          keyboardType="phone-pad"
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </View>
      <View>
        <TouchableOpacity style={styles.Continue} onPress={validateMobileNumber}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image resizeMode='cover' source={require("../assets/images/backgroundimage3.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topImage: {
    width: responsiveScreenWidth(100),
    height:responsiveScreenHeight(24),
  },
  Logoimage: {
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(3),
  },
  text: {
    textAlign: 'center',
  },
  Logintext: {
    textAlign: 'center',
    marginTop:responsiveScreenHeight(2),
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(3),
  },
  TextInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    elevation: 15,
    width: responsiveScreenWidth(70),
    alignSelf: 'center',
    marginTop: responsiveScreenHeight(2),
    paddingLeft: responsiveScreenWidth(3),
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: responsiveScreenHeight(1)
  },
  Continue: {
    backgroundColor: 'rgba(89, 20, 52, 1)',
    borderRadius: 20,
    width: responsiveScreenWidth(70),
    height:responsiveScreenHeight(6),
    elevation: 10,
    alignSelf: 'center',
    marginTop:responsiveScreenHeight(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: 'white',
    fontSize: responsiveScreenFontSize(2.3),
    fontWeight: 'bold',
  },
});