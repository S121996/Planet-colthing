import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {getHash, startOtpListener, useOtpVerify} from 'react-native-otp-verify';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Verify = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+918123450078');
  const [isOtpValid, setIsOtpValid] = useState(false);

  const otpRefs = useRef([]);

  const handleSkip = () => {
    navigation.navigate('Main');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handlePhoneNumberChange = text => {
    setPhoneNumber(text);
  };

  const {stopListener} = useOtpVerify({numberOfDigits: 6});

  useEffect(() => {
    getHash()
      .then(hash => {
        console.log('Hash:', hash);
      })
      .catch(console.log);

    const otpListener = startOtpListener(message => {
      const extractedOtp = /(\d{6})/g.exec(message);
      if (extractedOtp) {
        setOtp(extractedOtp[1].split(''));
        setIsOtpValid(true);
      }
    });

    return () => {
      stopListener();
    };
  }, [stopListener]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5 && otpRefs.current[index + 1]) {
      otpRefs.current[index + 1].focus(); 
    } else if (!text && index > 0 && otpRefs.current[index - 1]) {
      otpRefs.current[index - 1].focus(); 
    }
    validateOtp(newOtp);
  };

  const validateOtp = otpArray => {
    const otpString = otpArray.join('');
    const isValid = otpString.length === 6 && /^\d{6}$/.test(otpString);
    setIsOtpValid(isValid);
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '123456') {
      Alert.alert('Success', 'OTP Verified Successfully!', [
        {text: 'OK', onPress: () => navigation.navigate('Details')},
      ]);
    } else {
      Alert.alert('Error', 'Invalid OTP. Please check and try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={{textAlign:'center',fontSize:responsiveScreenFontSize(1.5),fontWeight:'bold',color:'black'}}>
              Skip
            </Text>
          </TouchableOpacity>
          <Text style={styles.verifyText}>Verify Details</Text>
          <Text style={styles.otpSentText}>
            OTP sent to your mobile number.
          </Text>

          <View style={styles.phoneNumberContainer}>
            {isEditing ? (
              <TextInput
                style={styles.phoneNumberInput}
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
                onBlur={() => setIsEditing(false)}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.phoneNumber}>{phoneNumber}</Text>
            )}
            <TouchableOpacity onPress={handleEdit}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.otpInputContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={el => (otpRefs.current[index] = el)}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={text => handleInputChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity style={{justifyContent:'center', height: responsiveScreenHeight(17),width:responsiveScreenWidth(80),marginTop:responsiveScreenHeight(3),
}} onPress={handleVerify}>
            <Text style={styles.verifyButtonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft:responsiveScreenWidth(62),bottom:responsiveScreenHeight(17)}}>
            <Text style={styles.resendOtpText}>Resend OTP</Text>
          </TouchableOpacity>

          

          <Text style={styles.stayStylishText}>
            Stay stylish with the latest Fashion
          </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  skipButton: {
    // backgroundColor:'red',
    marginLeft:responsiveScreenWidth(70),
    marginTop:responsiveScreenHeight(2),
    width:responsiveScreenWidth(15),
    height:responsiveScreenHeight(3),
    justifyContent:'center',
    borderRadius:responsiveScreenHeight(3),
    borderWidth:2,
    borderColor:'black',
    
   },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical:responsiveScreenHeight(10),
  },
  verifyText: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
    marginTop: responsiveScreenHeight(10),
    color: '#000',
  },
  otpSentText: {
    marginTop: responsiveScreenHeight(1),
    fontSize:responsiveScreenFontSize(1.5)
  },
  phoneNumberContainer: {
   flexDirection:'row',
  },
  phoneNumber: {
    fontWeight: 'bold',
    color:'black',
    marginRight: responsiveScreenHeight(6),
  },
  phoneNumberInput: {
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  editText: {
    color: 'blue',
    fontSize:responsiveScreenFontSize(2),
    fontWeight: 'bold',
    marginLeft:responsiveScreenWidth(4),
  },
  otpInputContainer: {
    flexDirection: 'row',
    marginTop: responsiveScreenHeight(5),
    justifyContent:'center',
    
  },
  otpInput: {
    height:responsiveScreenHeight(6),
    width: responsiveScreenWidth(10),
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: responsiveScreenWidth(2.5),
    backgroundColor: 'rgba(180,63,63,0.25)',
    textAlign:'center',
    borderColor: '#592034',
    fontSize:responsiveScreenFontSize(2),
    fontSize: responsiveScreenFontSize(2.5),
  },
  verifyButtonText: {
    fontSize: responsiveScreenFontSize(3),
    borderWidth: 1,
    top: responsiveScreenHeight(10),
    borderRadius: 10,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#592034',
    textAlign:'center',
    // textAlignVertical:'center'
  },
  resendOtpText: {
    fontSize: responsiveScreenFontSize(2),
    color: '#555',
  },
  
  stayStylishText: {
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    marginTop: responsiveScreenHeight(4),
  },
});

export default Verify;
