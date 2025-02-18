import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/welcome.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.infoText}>
        You have successfully created the account.
      </Text>

      <TouchableOpacity style={{backgroundColor:'rgba(89,20,52,1)',height:responsiveScreenHeight(7),width:responsiveScreenWidth(80),borderRadius:responsiveScreenHeight(2),justifyContent:'center'}} onPress={() => props.navigation.navigate('Main')}>
        <Text style={styles.continueButton}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
  image: {
    height: responsiveScreenHeight(20),
    bottom: responsiveScreenHeight(10), 
    resizeMode: 'contain',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(4),
    bottom: responsiveScreenHeight(10), 
  },
  infoText: {
    fontSize:responsiveScreenFontSize(2),
    textAlign: 'center',
    bottom:responsiveScreenHeight(7), 
  },
  continueButton: {
   
    fontSize:responsiveScreenFontSize(3),
    textAlign:'center',
    color:'white',
  fontWeight:'bold'
  },
});

export default Welcome;
