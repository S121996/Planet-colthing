import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Details = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [address, setAddress] = useState('');
  const [alternateNumber, setAlternateNumber] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Full Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = 'Valid Email is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    if (!address) newErrors.address = 'Address is required';
    if (!alternateNumber || !/^\d{10}$/.test(alternateNumber))
      newErrors.alternateNumber = 'Valid 10-digit Alternate Number is required';
    if (!gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (selectedDate) => {
    setDOB(selectedDate);
    setDatePickerVisibility(false);
  };

  const handleRegister = () => {
    if (validate()) {
      Alert.alert('Registration Successful', 'All details are valid!');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={styles.headerText}>User Details</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        keyboardType="default"
      />
      {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <View style={styles.dobContainer}>
        <TextInput
          placeholder="D.O.B"
          style={styles.dobInput}
          value={dob}
          editable={false}
        />
        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <Image source={require('../assets/images/Frame1.png')} style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>
      {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

      <TextInput
        placeholder="Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

      <View style={styles.genderContainer}>
        <TouchableOpacity onPress={() => setGender('Male')} style={{ flex: 1 }}>
          <Text style={[styles.genderText, gender === 'Male' && styles.genderSelected]}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('Female')} style={{ flex: 1 }}>
          <Text style={[styles.genderText, gender === 'Female' && styles.genderSelected]}>Female</Text>
        </TouchableOpacity>
      </View>
      {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

      <TextInput
        placeholder="Alternate Number"
        keyboardType="phone-pad"
        style={styles.input}
        value={alternateNumber}
        onChangeText={setAlternateNumber}
      />
      {errors.alternateNumber && <Text style={styles.errorText}>{errors.alternateNumber}</Text>}

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerButton}>Register</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isDatePickerVisible}
        onRequestClose={() => setDatePickerVisibility(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.datePickerContainer}>
            <DatePicker
              mode="calendar"
              minimumDate={getToday()}
              selected={dob}
              onDateChange={handleDateChange}
            />
            <TouchableOpacity onPress={() => setDatePickerVisibility(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: responsiveFontSize(14),
    fontWeight: 'bold',
    // marginBottom: ,
    color: 'rgb(0,0,0)',
  },
  input: {
    height: 50,
    width: '90%',
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'left',
    borderColor: 'rgba(180,63,63,1)',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  
  errorText: {
    color: 'red',
  },
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'rgba(180,63,63,1)',
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  dobInput: {
    flex: 1,
    height: 50,
    textAlign: 'left',
  },
  calendarIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
    bottom: -15,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderColor: 'rgba(180,63,63,1)',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 20,
    overflow: 'hidden',
  },
  genderText: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(248,237,237,1)',
    color: 'black',
  },
  genderSelected: {
    backgroundColor: 'rgba(180,63,63,1)',
    color: 'white',
  },
  registerButton: {
    height: 60,
    width: 250,
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(23,59,69,1)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  datePickerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(23,59,69,1)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Details;