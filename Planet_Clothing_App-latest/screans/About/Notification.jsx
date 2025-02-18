import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Notification = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.notificationCard}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Flat 50% Off</Text>
          <Text style={styles.text}>By sharing this card</Text>
        </View>
        <Image 
          source={require('../../assets/tempimages/Notification1.png')} 
          style={styles.image} 
        />
      </View>
      
      <View style={styles.notificationCard}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Get a Gift Card of 500</Text>
          <Text style={styles.text}>Claim on a first order</Text>
        </View>
        <Image 
          source={require('../../assets/tempimages/Notification2.png')} 
          style={styles.image} 
        />
      </View>
      
      <View style={styles.notificationCard}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Get a Gift hamper</Text>
          <Text style={styles.text}>Order Above Rs.1500</Text>
        </View>
        <Image 
          source={require('../../assets/tempimages/Notification3.png')} 
          style={styles.image} 
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    padding: wp('5%'),
  },
  notificationCard: {
    marginVertical: hp('1.5%'),
    backgroundColor: 'rgba(93,23,55,1)',
    height: hp('15%'),
    width: wp('90%'),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: wp('4%'),
    marginBottom: hp('0.5%'),
  },
  image: {
    width: wp('15%'),
    height: hp('10%'),
    resizeMode: 'contain',
  }
});

export default Notification;
