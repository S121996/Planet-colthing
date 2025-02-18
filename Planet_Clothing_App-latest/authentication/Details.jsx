import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const { width } = Dimensions.get('window');

const Details = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [errors, setErrors] = useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getMinimumDate = () => {
    return '1900-01-01';
  };

  const validate = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Full Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = 'Valid Email is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = selectedDate => {
    const minDate = new Date(getMinimumDate());
    const selectedDateObj = new Date(selectedDate);

    if (selectedDateObj <= minDate) {
      Alert.alert(
        'Invalid Date',
        'Date of Birth cannot be earlier than 01/01/1900',
      );
      return;
    }

    setDOB(selectedDate);
    setErrors(prevErrors => ({ ...prevErrors, dob: '' })); 
    setDatePickerVisibility(false);
  };

  const handleRegister = () => {
    setIsSubmitted(true); 
    if (validate()) {
      Alert.alert('Registration Successful', 'All details are valid!');
      props.navigation.navigate('Welcome');
      setFullName('');
      setEmail('');
      setDOB('');
    }
  };

  const handleInputChange = (setter, field) => text => {
    setter(text);
    if (text) {
      setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>User Details</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={handleInputChange(setFullName, 'fullName')}
        keyboardType="default"
      />
      {isSubmitted && errors.fullName && (
        <Text style={styles.errorText}>{errors.fullName}</Text>
      )}

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={handleInputChange(setEmail, 'email')}
        keyboardType="email-address"
      />
      {isSubmitted && errors.email && (
        <Text style={styles.errorText}>{errors.email}</Text>
      )}

      <View style={styles.dobContainer}>
        <TextInput
          placeholder="D.O.B"
          style={styles.dobInput}
          value={dob}
          editable={false}
        />
        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <Feather name='calendar' size={hp('3%')} style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>
      {isSubmitted && errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

      <TouchableOpacity style={{justifyContent:'center',backgroundColor:'rgba(89,20,52,1)',height:responsiveScreenHeight(7),width:responsiveScreenWidth(80),marginTop:responsiveScreenHeight(4),borderRadius:10}} onPress={handleRegister}>
        <Text style={styles.registerButton}>Register</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isDatePickerVisible}
        onRequestClose={() => setDatePickerVisibility(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.datePickerContainer}>
            <DatePicker
              mode="calendar"
              minimumDate={getMinimumDate()}
              selected={dob}
              onDateChange={handleDateChange}
            />
            <TouchableOpacity
              onPress={() => setDatePickerVisibility(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:responsiveScreenHeight(2),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(4),
    fontWeight: 'bold',
    marginBottom: responsiveScreenHeight(2),
    color: 'rgb(0,0,0)',
  },
  input: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(80),
    borderWidth: 2,
    borderRadius: 15,
    // marginBottom: hp('1.5%'),
    marginTop:responsiveScreenHeight(2),
    // textAlign: 'left',
    borderColor: 'rgba(89,20,52,1)',
    backgroundColor: '#fff',
    paddingHorizontal: responsiveScreenWidth(5),
    fontSize:responsiveScreenFontSize(2),
  },
  errorText: {
    color: 'red',
    fontSize: responsiveScreenFontSize(2),
  },
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveScreenWidth(80),
    height:responsiveScreenHeight(7),
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'rgba(89,20,52,1)',
    marginTop: responsiveScreenHeight(2),
    paddingHorizontal:responsiveScreenWidth(4),
    backgroundColor: '#fff',
  },
  dobInput: {
    flex: 1,
    height: responsiveScreenHeight(7),
    fontSize: responsiveScreenFontSize(2),
  },
  calendarIcon: {
    color: 'rgba(89,20,52,1)',
  },
  registerButton: {
    textAlign:'center',
    fontSize: responsiveScreenFontSize(2.5),
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  datePickerContainer: {
    backgroundColor: 'white',
    padding: wp('5%'),
    margin: wp('5%'),
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  closeButton: {
    padding: wp('2%'),
    backgroundColor: 'rgba(89,20,52,1)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2%'),
  },
});

export default Details;
