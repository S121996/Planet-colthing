import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,FlatList,
  Modal,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Cart = props => {
  const [couponSaving, setCouponSaving] = useState(200);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const deliveryFee = 50;
  const platformFee = 50;

  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  // Dummy cart data, replace this with actual data source
  const cartData = []; // Add actual cart data or state management

  const increaseQuantity = item => {
    // Add functionality to increase quantity
  };

  const decreaseQuantity = item => {
    // Add functionality to decrease quantity
  };

  const getTotalAmount = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalWithFees = () => {
    return getTotalAmount() - (isCouponApplied ? couponSaving : 0) + deliveryFee + platformFee;
  };

  const setSize = (item, size) => {
    // Add functionality to set size
  };

  const openSizeModal = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const selectSize = size => {
    setSize(selectedItem, size);
    setModalVisible(false);
  };

  const applyCoupon = () => {
    props.navigation.navigate('TheCoupon');
  };

  const removeCoupon = () => {
    setIsCouponApplied(false);
    setCouponSaving(0);
  };

  useEffect(() => {
    if (route.params?.selectedCoupon) {
      setIsCouponApplied(true);
      setCouponSaving(route.params.selectedCoupon.discount);
    }
  }, [route.params?.selectedCoupon]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Uncomment and use FlatList if you have actual cart data */} 
         <FlatList
          data={cartData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.cartItemContainer}>
              <View style={styles.cartItemHeader}>
                <Image source={item.image} style={styles.cartItemImage} />
              </View>
              <View style={styles.cartItemDetails}>
                <Text style={styles.deliveryText}>Delivery by 05th Aug</Text>
                <View style={styles.sizeSelector}>
                  <TouchableOpacity
                    onPress={() => openSizeModal(item)}
                    style={styles.sizeButton}>
                    <Text style={styles.sizeText}>
                      Size L {item.selectedSize}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item)}>
                    <Text style={styles.quantityText}>
                      <AntDesign name="delete" size={10} />
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityNumber}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item)}>
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <View style={styles.couponContainer}>
          <Image source={require('../assets/images/Glyph.jpg')} />
          <Text style={styles.couponText}>Apply Coupon</Text>
          {isCouponApplied ? (
            <TouchableOpacity onPress={removeCoupon}>
              <Text style={[styles.couponButton, { color: 'green' }]}>
                Coupon Applied
                {/* <AntDesign name='close' size={15} /> */}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={applyCoupon}>
              <Text style={[styles.couponButton, { color: 'skyblue' }]}>
                Select
                <AntDesign name='right' size={15} />
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderDetailsTitle}>Order Details</Text>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Bag Total</Text>
            <Text style={styles.orderDetailValue}>Rs. {getTotalAmount()}</Text>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Bag Saving</Text>
            <Text style={styles.orderDetailValue}>
              Rs. {isCouponApplied ? couponSaving : 0}
            </Text>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Coupon Savings</Text>
            <Text style={styles.orderDetailValue}>
              {isCouponApplied ? couponSaving : 'Apply Coupon'}
            </Text>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Delivery Fee</Text>
            <Text style={styles.orderDetailValue}>Rs. {deliveryFee}</Text>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.orderDetailLabel}>Platform Fee</Text>
            <Text style={styles.orderDetailValue}>Rs. {platformFee}</Text>
          </View>
          <View style={styles.orderDetailRow}>
            <Text style={styles.totalAmountLabel}>Total Amount</Text>
            <Text style={styles.totalAmountValue}>
              Rs. {getTotalWithFees()}
            </Text>
          </View>
        </View>
        <View style={styles.savedAmountContainer}>
          <Text style={styles.savedAmountText}>
            You Saved Rs. {isCouponApplied ? '299' : '0'}
          </Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Size</Text>
              {sizeOptions.map(size => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeOption,
                    {
                      backgroundColor:
                        selectedItem && selectedItem.selectedSize === size
                          ? 'skyblue'
                          : '#fff',
                    },
                  ]}
                  onPress={() => selectSize(size)}>
                  <Text style={styles.sizeOptionText}>{size}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View>
        <View style={styles.buyContainer}>
          <Text style={styles.totalAmount}>
            Rs. {getTotalWithFees()}
            {'\n'}
            <Text style={styles.totalAmountLabel}>Total Amount</Text>
          </Text>
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={() => props.navigation.navigate('OrderSummary')}>
            <Text style={styles.buyNowText}>buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    // paddingBottom: 100,
  },
  cartItemContainer: {
    backgroundColor: '#f9f9f9',
    marginVertical: 10,
    borderRadius: 10,
    height: 235,
    width: 300,
    margin: 30,
    overflow: 'hidden',
  },
  cartItemHeader: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
  cartItemImage: {
    width: 200,
    height: 200,
  },
  cartItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
  },
  deliveryText: {
    color: 'grey',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  sizeSelector: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 15,
  },
  sizeButton: {
    borderRadius: 20,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  sizeText: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: 'skyblue',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: responsiveFontSize(2),
    paddingHorizontal: 10,
  },
  quantityNumber: {
    fontSize: responsiveFontSize(2),
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  couponText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  couponButton: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  orderDetailsContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  orderDetailsTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  orderDetailLabel: {
    fontSize: responsiveFontSize(2),
  },
  orderDetailValue: {
    fontSize: responsiveFontSize(2),
  },
  totalAmountLabel: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  totalAmountValue: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  savedAmountContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  savedAmountText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: responsiveWidth(80),
    padding: 20,
  },
  modalTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sizeOption: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  sizeOptionText: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    textAlign: 'center',
  },
  buyContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  totalAmount: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buyNowButton: {
    backgroundColor: 'skyblue',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buyNowText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
});

export default Cart;
