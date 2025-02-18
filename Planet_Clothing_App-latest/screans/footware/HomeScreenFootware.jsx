import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const HomeScreenFootware = ({navigation}) => {
  const valueToPass = ['Top_Tab_Navigation_Footware', 'HomeScreenFootware'];
  const singleproduct = () => {
    navigation.navigate('SingleProducts', {data: valueToPass});
  };
  const arr = [1, 2, 3, 4];
  /* temperory object */
  const imagemap = {
    one: require('../../assets/images/Shoesimage1.png'),
    two: require('../../assets/images/Shoesimage2.png'),
    three: require('../../assets/images/Shoesimage4.png'),
    four: require('../../assets/images/Shoesimage7.png'),
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.main}>
          <View style={styles.imageslider}>
            <View style={styles.imagesliderheader}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveFontSize(2),
                  letterSpacing: responsiveFontSize(0.2),
                }}>
                Trends, In DemandF
              </Text>
            </View>
            <View style={styles.imagecontainer}>
              <Image
                source={require('../../assets/images/ShopNowShoes.png')}
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              />
            </View>
          </View>
          <View style={styles.discount}>
            <View style={styles.circle}>
              <View style={styles.circle1}></View>
              <View style={styles.circle2}></View>
            </View>
            <View style={styles.discount1}>
              <Text style={{color: 'black'}}>FlAT 200 OFF</Text>
            </View>
            <View style={styles.discount2}>
              <Text
                style={{
                  backgroundColor: 'pink',
                  borderRadius: responsiveWidth(0.5),
                }}>
                ...........................
              </Text>
            </View>
          </View>
          <View style={styles.products}>
            <ScrollView>
              <View style={styles.scrollview}>
                {arr.map((item, index) => (
                  <View style={styles.productcontainer} key={index}>
                    <View style={styles.productimage}>
                      <View style={styles.cart}>
                        <View>
                          <TouchableOpacity>
                            <Image
                              source={require('../../assets/mens_categories_images/Vector.png')}
                            />
                          </TouchableOpacity>
                        </View>
                        <View>
                          <TouchableOpacity>
                            <Image
                              source={require('../../assets/mens_categories_images/Addtocart.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity onPress={singleproduct}>
                        <Image
                          source={
                            item === 1
                              ? imagemap.one
                              : item === 2
                              ? imagemap.two
                              : item === 3
                              ? imagemap.three
                              : item === 4
                              ? imagemap.four
                              : null
                          }
                          style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.producttext}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: responsiveFontSize(2),
                        }}>
                        White Tshirt
                      </Text>
                      <Text>RS 989</Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreenFootware;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  imageslider: {
    flex: 1,
  },
  imagesliderheader: {
    backgroundColor: 'black',
    flex: 1,
    orderTopLeftRadius: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecontainer: {
    flex: 3.8,
  },
  discount: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    zIndex: 1,
    height: '70%',
    width: '7%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  circle1: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(100),
    backgroundColor: 'white',
  },
  circle2: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(100),
    backgroundColor: 'white',
  },
  discount1: {
    flex: 1,
    backgroundColor: 'white',
    height: '45%',
    width: '100%',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discount2: {
    flex: 1,
    backgroundColor: '#D6DAC8',
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  products: {
    flex: 2.1,
    overflow: 'hidden',
  },
  scrollview: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productcontainer: {
    height: responsiveHeight(25),
    width: responsiveHeight(20),
    margin: responsiveWidth(4),
  },
  productimage: {
    flex: 4,
    borderRadius: responsiveWidth(3),
    overflow: 'hidden',
  },
  producttext: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    position: 'absolute',
    width: '30%',
    height: '90%',
    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: '5%',
    top: responsiveHeight(1),
  },
});

//
