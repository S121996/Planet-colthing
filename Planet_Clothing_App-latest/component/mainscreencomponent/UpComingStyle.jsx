import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function UpComingStyle() {
  return (
    <View style={styles.upcomingstylecontainer}>
      <View
        style={{
          marginTop:hp('3%'),
          marginLeft:wp('5%'),
        }}>
        <Text style={styles.upcomingstyletext}>the upcoming style ...</Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize:hp('2%')
          }}>
          shop new styles
        </Text>
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Image source={require('../../assets/images/image3.png')}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upcomingstylecontainer: {
    width:wp('100%'),
    backgroundColor: 'rgba(233, 157, 194, 1)',
    display: 'flex',
    flexDirection: 'row',
  },
  upcomingstyletext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:hp('4%'),
  },
});