import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';


const VALID_COUNTRIES = ['United States', 'Canada', 'India']; 
const VALID_CITIES = ['New York', 'Los Angeles', 'Toronto', 'Mumbai','Pune']; 

const AddAddress = () => {
  const [form, setForm] = useState({
    country: '',
    name: '',
    lastName: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });

    
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};

    
    if (!form.country) newErrors.country = 'Country is required';
    else if (!VALID_COUNTRIES.includes(form.country)) newErrors.country = 'Invalid country';

    
    if (!form.name) newErrors.name = 'First name is required';

    
    if (!form.lastName) newErrors.lastName = 'Last name is required';

    
    if (!form.streetAddress) newErrors.streetAddress = 'Street address is required';

    
    if (!form.city) newErrors.city = 'City is required';
    else if (!VALID_CITIES.includes(form.city)) newErrors.city = 'Invalid city';

    
    if (!form.state) newErrors.state = 'State/Province/Region is required';

  
    if (!form.zip) newErrors.zip = 'Zip code is required';
    else if (!/^\d{1,10}$/.test(form.zip)) newErrors.zip = 'Zip code must be a number up to 10 digits';

    
    if (!form.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Form Submitted', JSON.stringify(form, null, 2));
      setForm({
        country: '',
        name: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
      });
      setErrors({});
    } else {
      Alert.alert('Validation Error', 'Please fill out all fields correctly.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formGroup}>
          <Text>Country/Region</Text>
          <TextInput
            style={[styles.input, errors.country && styles.errorInput]}
            placeholder=""
            value={form.country}
            onChangeText={(text) => handleChange('country', text)}
          />
          {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>First Name</Text>
          <TextInput
            style={[styles.input, errors.name && styles.errorInput]}
            placeholder=""
            value={form.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>Last Name</Text>
          <TextInput
            style={[styles.input, errors.lastName && styles.errorInput]}
            placeholder=""
            value={form.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />
          {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>Street Address</Text>
          <TextInput
            style={[styles.input, errors.streetAddress && styles.errorInput]}
            placeholder=""
            value={form.streetAddress}
            onChangeText={(text) => handleChange('streetAddress', text)}
          />
          {errors.streetAddress && <Text style={styles.errorText}>{errors.streetAddress}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>Street Address (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={form.streetAddress2}
            onChangeText={(text) => handleChange('streetAddress2', text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text>City</Text>
          <TextInput
            style={[styles.input, errors.city && styles.errorInput]}
            placeholder=""
            value={form.city}
            onChangeText={(text) => handleChange('city', text)}
          />
          {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>State/Province/Region</Text>
          <TextInput
            style={[styles.input, errors.state && styles.errorInput]}
            placeholder=""
            value={form.state}
            onChangeText={(text) => handleChange('state', text)}
          />
          {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>Zip Code</Text>
          <TextInput
            style={[styles.input, errors.zip && styles.errorInput]}
            placeholder=""
            value={form.zip}
            onChangeText={(text) => handleChange('zip', text)}
          />
          {errors.zip && <Text style={styles.errorText}>{errors.zip}</Text>}
        </View>

        <View style={styles.formGroup}>
          <Text>Phone Number</Text>
          <TextInput
            style={[styles.input, errors.phone && styles.errorInput]}
            placeholder=""
            keyboardType="numeric"
            value={form.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'rgba(93, 23, 55, 1)',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddAddress;