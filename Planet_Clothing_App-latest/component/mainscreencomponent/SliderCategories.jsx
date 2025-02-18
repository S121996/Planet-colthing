import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
  export default function SliderCategories() {
    const navigation = useNavigation()
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesmaincontainer}>
          <View style={styles.categoriescontainer}>
            <Image
              style={styles.categoriesimage}
              source={require('../../assets/images/newarrivals.png')}
            />
            <Text style={styles.categoriestext}>NewArrivals</Text>
          </View>
          <TouchableOpacity style={styles.categoriescontainer}>
            <Image
              style={styles.categoriesimage}
              source={require('../../assets/images/women.png')}
            />
            <Text style={styles.categoriestext}>Woman</Text>
          </TouchableOpacity>
          <View style={styles.categoriescontainer}>
            <Image
              style={styles.categoriesimage}
              source={require('../../assets/images/man.png')}
            />
            <Text style={styles.categoriestext}>Man</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentSuccess')}
            style={styles.categoriescontainer}>
            <Image
              style={styles.categoriesimage}
              source={require('../../assets/images/kids.png')}
            />
            <Text style={styles.categoriestext}>Kids</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoriescontainer}>
            <Image
              style={styles.categoriesimage}
              source={require('../../assets/images/kids.png')}
            />
            <Text style={styles.categoriestext}>Shoes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    categoriesmaincontainer: {
      flexDirection: 'row',
      marginTop:hp('2%'),
      marginLeft:wp('2%'),
    },
    categoriescontainer: {
      flexDirection: 'row',
    },
    categoriesimage: {
      width: wp('14%'),
      height:hp('4%'),
      resizeMode: 'contain',
    },
    categoriestext: {
      fontSize:responsiveFontSize(2),
      marginLeft:wp('2%'),
      fontWeight:'bold',
      color:'black'
    },
  });