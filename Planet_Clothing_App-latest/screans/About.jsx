import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale, verticalScale} from 'react-native-size-matters';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';

const About = ({navigation}) => {
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.categories}>
          <View style={styles.content}>
            <Text style={styles.text}>What's New</Text>
            <TouchableOpacity onPress={() => navigation.navigate('WhatsNew')}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/categories_images/Frame30.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Men</Text>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('ManCategory', {
                  screen: 'Man',
                });
              }}
              >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/categories_images/image10.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Women</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('WomanCategory', {
                  screen: 'Woman',

                });
              }}
              >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/categories_images/image11.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Footwear</Text>
            <TouchableOpacity
            
              onPress={() => {
                navigation.navigate('FootWearCategory', {
                  screen: 'Footwear',
                });
              }}
              >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../assets/categories_images/Footware.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    paddingBottom: hp('4%'),
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  content: {
    height: verticalScale(150),
    width: scale(140),
    margin: scale(15),
    borderRadius: wp('2.5%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(233, 157, 194, 1)',
    elevation: 10,
  },
  imageContainer: {
    width: scale(200),
    height: verticalScale(120),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: responsiveScreenFontSize(2.7) ,
    color: 'black',
    marginBottom:verticalScale(1),
  },
});
