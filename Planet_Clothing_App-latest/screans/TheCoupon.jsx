import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
  } from 'react-native';
  import React, { useState } from 'react';
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  const TheCoupon = (props) => {
    const [selectedCoupon, setSelectedCoupon] = useState(null);
  
    const handleCouponSelect = (coupon) => {
      setSelectedCoupon(coupon);
    };
  
    const handleContinueShopping = () => {
      if (selectedCoupon) {
        props.navigation.navigate('Cart', { selectedCoupon });
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Search your coupon here"
              style={styles.textInput}
            />
            <Icon
              name="search"
              size={20}
              color="grey"
              style={styles.searchIcon}
            />
          </View>
        </View>
  
        <View style={styles.couponContainer}>
          <Text style={styles.couponText}>My Coupons</Text>
        </View>
        <ScrollView>
          <View style={styles.couponItem}>
            <TouchableOpacity
              style={[
                styles.couponItemContent,
                {
                  backgroundColor:
                    selectedCoupon === 'New User'
                      ? 'rgba(253,221,138,0.7)'
                      : 'rgba(253,221,138,1)',
                },
              ]}
              onPress={() => handleCouponSelect({ name: 'New User', discount: 200 })}
            >
              <Text style={styles.couponItemText}>New User{'\n'} Rs.200 off</Text>
              <Image
                source={require('../assets/images/coupon1.png')}
                style={styles.couponImage}
              />
            </TouchableOpacity>
          </View>
  
          <View style={styles.couponItemContent2}>
            <TouchableOpacity
              style={[
                styles.couponItemContent,
                {
                  backgroundColor:
                    selectedCoupon === 'New Arrivals'
                      ? 'rgba(145,187,251,0.7)'
                      : 'rgba(145,187,251,1)',
                },
              ]}
              onPress={() => handleCouponSelect({ name: 'New Arrivals', discount: 300 })}
            >
              <Text style={styles.couponItemText}>
                New Arrivals {'\n'} flat 30% off
              </Text>
              <Image
                source={require('../assets/images/coupon2.png')}
                style={styles.couponImage}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: selectedCoupon ? '#000' : '#ccc' },
          ]}
          onPress={handleContinueShopping}
          disabled={!selectedCoupon}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchContainer: {
      backgroundColor: 'rgba(207, 132, 168, 1)',
      padding: 40,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    textInput: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 40,
      borderRadius: 5,
      height: 40,
    },
    searchIcon: {
      position: 'absolute',
      left: 240,
    },
    couponContainer: {
      padding: 10,
      marginTop: 20,
      marginLeft: 10,
    },
    couponText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    couponItem: {
      backgroundColor: 'rgba(253,221,138,1)',
      borderRadius: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    couponItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    couponItemContent2: {
      backgroundColor: 'rgba(145,187,251,1)',
      borderRadius: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    couponItemText: {
      flex: 1,
      fontSize: 15,
      margin: 20,
      fontWeight: 'bold',
    },
    couponImage: {
      width: 100,
      height: 100,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      padding: 20,
      margin: 10,
      borderRadius: 10,
    },
  });
  
  export default TheCoupon;