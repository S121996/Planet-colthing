import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const Delete = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Delete1.png')}
        style={styles.image}
      />
      <Text style={styles.confirmationText}>Confirmation</Text>
      <Text style={styles.confirmationSubText}>
        Are you sure you want to delete the address?
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 16,
  },
  image: {
    marginTop: 10,
  },
  confirmationText: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  confirmationSubText: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 20,
  },
  deleteButton: {
    borderRadius: 5,
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    borderRadius: 5,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Delete;