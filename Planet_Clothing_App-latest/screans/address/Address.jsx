import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Address = props => {
  const [circleColor, setCircleColor] = useState('');

  const handleCircleClick = () => {
    setCircleColor('green');
    props.navigation.navigate('OrderSummary');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AddAddress')}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add a new Address</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Kamal</Text>
        <TouchableOpacity onPress={handleCircleClick}>
          <Entypo
            name="circle"
            size={25}
            style={[styles.circleIcon, {tintColor: circleColor}]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          654, Mohannagar Noida-98 {'\n'}near 102, Metro Noida {'\n'}202020
        </Text>
        <Text style={styles.phoneText}>+918976543212</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => props.navigation.navigate('AddAddress')}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteImageButton}
          onPress={() => props.navigation.navigate('Delete')}>
          <MaterialCommunityIcons name="delete-outline" size={40} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => props.navigation.navigate('Delete')}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    top: 5,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgba(233, 157, 194, 1)',
    height: 60,
    alignItems: 'center',
    paddingLeft: 20,
  },
  addIcon: {
    height: 20,
    width: 20,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  circleIcon: {
    left: 200,
    marginLeft: 'auto',
    marginRight: 20,
  },
  addressContainer: {
    marginTop: 20,
    padding: 10,
  },
  addressText: {
    fontSize: 16,
    lineHeight: 22,
  },
  phoneText: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: 'rgba(93, 23, 55, 1)',
    margin: 10,
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteImageButton: {
    margin: 10,
    marginLeft: 20,
  },
  deleteButton: {
    borderRadius: 5,
    height: 50,
    backgroundColor: 'rgba(93, 23, 55, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Address