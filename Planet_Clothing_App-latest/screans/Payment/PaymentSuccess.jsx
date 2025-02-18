import React from 'react';
import { View, StyleSheet, Dimensions, Image ,Text, ImageBackground, ScrollView} from 'react-native';
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHei} from 'react-native-responsive-dimensions';
import { scale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const CircleWithBorderAndInnerCircle = () => {
  const outerCircleSize = width * 0.4; // 40% of screen width
  const innerCircleSize = width * 0.2; // 20% of screen width

  return (
    <ScrollView>
    <View style={styles.container}>
      <View
        style={[
          styles.outerCircle,
          { width: outerCircleSize, height: outerCircleSize, borderRadius: outerCircleSize / 2 },
        ]}
      >
        <View> 
          <Image source={require('../../assets/tempimages/paymentsuccess.png')}></Image>
        </View>
      </View>
      <View style={{marginTop:verticalScale(40)}}>
        <Text style={{color:'black'}}>Your Payment was done Successfully!</Text>
      </View>
      <View style={{backgroundColor: 'rgba(93, 23, 55, 1)',borderRadius:9,width:scale(200),height:verticalScale(35),justifyContent:'center',alignItems:'center',marginTop:verticalScale(50)}}>
        <Text style={{color:'white',fontSize:responsiveScreenFontSize(2.5)}}>Done</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  outerCircle: {
    borderWidth: 4, // Width of the outer circle border
    borderColor: 'rgba(66, 227, 40, 1)', // Color of the outer circle border
    borderRadius: 100, // 50% of width/height to make it round
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default CircleWithBorderAndInnerCircle;
