import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
  } from 'react-native';
  import React, {useState} from 'react';
//   import {useSelector} from 'react-redux';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
  import Feather from 'react-native-vector-icons/Feather';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
  
  const OrderSummary = props => {
    const [couponSaving, setCouponSaving] = useState(200);
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const deliveryFee = 50;
    const platformFee = 50;
    // const cartData = useSelector(state => state.cart);
  
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
    const increaseQuantity = item => {
      const updatedCart = cartData.map(cartItem => {
        if (cartItem.id === item.id) {
          return {...cartItem, quantity: cartItem.quantity + 1};
        }
        return cartItem;
      });
      // setCart(updatedCart);
    };
  
    const decreaseQuantity = item => {
      const updatedCart = cartData.map(cartItem => {
        if (cartItem.id === item.id && cartItem.quantity > 1) {
          return {...cartItem, quantity: cartItem.quantity - 1};
        }
        return cartItem;
      });
      // setCart(updatedCart);
    };
  
    const getTotalAmount = () => {
    //   return cartData.reduce(
    //     (total, item) => total + item.price * item.quantity,
    //     0,
    //   );
    };
  
    const getTotalWithFees = () => {
      return (
        getTotalAmount() -
        (isCouponApplied ? couponSaving : 0) +
        deliveryFee +
        platformFee
      );
    };
  
    const setSize = (item, size) => {
      const updatedCart = cartData.map(cartItem => {
        if (cartItem.id === item.id) {
          return {...cartItem, selectedSize: size};
        }
        return cartItem;
      });
      // setCart(updatedCart);
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
      setIsCouponApplied(!isCouponApplied);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.addressContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.addressTitle}>Kamal</Text>
              <Text style={styles.addressTitle}>Delivery Address</Text>
            </View>
            <Text style={styles.addressDetails}>
              {'\n'}
              654, Mohannagar Noida-98 {'\n'}
              Near 102 Metro Noida {'\n'}
              202020
              {'\n'}
              {'\n'}
              +918976543212
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AddAddress')}>
              <Feather name="plus" size={25} style={styles.addAddressIcon} />
            </TouchableOpacity>
            <View style={styles.addressButtons}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => props.navigation.navigate('Address')}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Delete')}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  size={40}
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
  
          {/* <FlatList
            data={cartData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View>
                <View style={styles.cartItemContainer}>
                  <Image source={item.image} style={styles.cartItemImage} />
                  <View style={styles.cartItemDetails}>
                    <Text style={styles.itemName}>
                      Type This Typography Women Ro.
                    </Text>
                    <View style={styles.sizeSelector}>
                      <TouchableOpacity
                        onPress={() => openSizeModal(item)}
                        style={styles.sizeButton}>
                        <Text style={styles.sizeText}>
                          Size {item.selectedSize || 'L'}
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
                        <Text style={styles.quantityText}>
                          <Feather name="plus" size={10} />
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          top: 30,
                          right: 170,
                          flexDirection: 'row',
                        
                        }}>
                        <FontAwesome name="star" size={20} color="#000" />
                        <FontAwesome name="star" size={20} color="#000" />
                        <FontAwesome name="star" size={20} color="#000" />
                        <FontAwesome name="star" size={20} color="#000" />
                        <FontAwesome name="star" size={20} color="#000" />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          top: 50,
                          right: 260,
                        }}>
                        <Text style={{color: 'green'}}>82%</Text>
                        <Text>1,999 </Text>
                        <Text style={{color: 'green'}}>
                          <FontAwesome6
                            name="indian-rupee-sign"
                            size={10}
                            color="green"
                          />{' '}
                          599
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                </View>
                <View style={{flexDirection: 'row', bottom: 35, left: 15}}>
                  <Text style={styles.deliveryText}>Delivery by 05th Aug</Text>
                  <Text style={{fontSize: 10, color: 'green', left: 10}}>
                    1 offer is applied 2 offers available
                  </Text>
                </View>
                
              </View>
            )}
          /> */}
  
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
              <Text style={styles.totalAmountLabel}>Order Details</Text>
              <Text style={styles.totalAmountValue}>
                Rs. {getTotalWithFees()}
              </Text>
            </View>
          </View>
  
          <View style={styles.savedAmountContainer}>
            <Image
              source={require('../assets/images/congrats.png')}
              style={styles.congratsIcon}
            />
            <Text style={styles.savedAmount}>
              You Saved Rs. {isCouponApplied ? '299' : '0'}
            </Text>
          </View>
        </ScrollView>
  
        <View style={styles.buyContainer}>
          <Text style={styles.totalAmount}>
            Rs. {getTotalWithFees()} {'\n'}{' '}
            <Text style={styles.totalAmountLabel}>Total Amount</Text>
          </Text>
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={() => props.navigation.navigate('OrderSummary')}>
            <Text style={styles.buyNowText}>Payment</Text>
          </TouchableOpacity>
        </View>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
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
                  <Text style={styles.sizeText}>{size}</Text>
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
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollContainer: {
      // padding: 16,
    },
    addressContainer: {
      backgroundColor: '#fff',
      padding: responsiveHeight(2),
      marginTop: responsiveHeight(2.5),
      marginBottom: responsiveHeight(2),
      borderTopWidth: 0.2,
      borderBottomWidth:0.2,
    },
    addressTitle: {
      fontWeight: 'bold',
      fontSize: responsiveFontSize(2.3),
      marginBottom: responsiveHeight(1),
    },
    addressDetails: {
      fontSize: responsiveFontSize(1.7),
      marginBottom: responsiveHeight(1.5)
    },
    addressButtons: {
      flexDirection: 'row',
      marginLeft: responsiveWidth(1),
      alignItems: 'center',
    },
    editButton: {
      backgroundColor: 'rgba(93, 23, 55, 1)',
      justifyContent:'center',
      height: responsiveHeight(5),
      width: responsiveWidth(20),
      borderRadius: 6,
    },
    buttonText: {
      color: '#fff',
      fontSize: responsiveFontSize(2),
      textAlign: 'center',
    },
    deleteIcon: {
      left: responsiveWidth(2),
    },
    addAddressIcon: {
      left: responsiveWidth(70),
      bottom: responsiveHeight(13),
      backgroundColor: 'rgba(214,218,200,1)',
      borderWidth: 1,
      borderRadius: 10,
      height: responsiveHeight(3),
      width: responsiveWidth(6),
    },
    cartItemContainer: {
      backgroundColor: '#fff',
      padding: 15,
      height:160,
      width:'100%',
      flexDirection: 'row',
      borderBottomWidth:0.2,
    },
    cartItemImage: {
      width: 100,
      height: 100,
      marginRight: 20,
    },
    cartItemDetails: {
      flex: 1,
    },
    deliveryText: {
      fontSize: 10,
      color: '#000',
    },
    itemName: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#000',
    },
    sizeSelector: {
      flexDirection: 'row',
      marginTop: 5,
    },
    sizeButton: {
      backgroundColor: '#fff',
      height: 18,
      width: 60,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
    },
    sizeText: {
      fontSize: 10,
      color: '#000',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      left: 100,
      bottom: 20,
      borderRadius: 5,
      height: 20,
      width: 70,
      borderWidth: 1,
    },
    quantityText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#000',
      paddingHorizontal: 10,
    },
    quantityNumber: {
      fontSize: 10,
      color: '#000',
    },
    orderDetailsContainer: {
      backgroundColor: '#fff',
      padding: responsiveHeight(2.3),
    },
    orderDetailsTitle: {
      fontSize: responsiveFontSize(2.5),
      fontWeight: 'bold',
      marginBottom: responsiveHeight(1.4),
    },
    orderDetailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: responsiveHeight(1.2),
    },
    orderDetailLabel: {
      fontSize: responsiveFontSize(1.8),
      color: '#000',
    },
    orderDetailValue: {
      fontSize: responsiveFontSize(1.8),
      color: '#000',
    },
    totalAmountLabel: {
      fontSize: responsiveFontSize(2.2),
      fontWeight: 'bold',
      color: 'blue',
    },
    totalAmountValue: {
      fontSize: responsiveFontSize(2.2),
      fontWeight: 'bold',
      color: '#000',
    },
    savedAmountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255,241,194,1)',
      marginTop: responsiveHeight(1),
      padding:responsiveHeight(2),
    },
    congratsIcon: {
      width: responsiveWidth(16),
      height: responsiveHeight(7),
    },
    savedAmount: {
      fontSize: responsiveFontSize(2),
      fontWeight: 'bold',
      color: '#000',
      marginLeft: responsiveWidth(4),
    },
    buyContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: responsiveWidth(3),
      borderTopWidth: 0.5,
      borderTopColor: '#ddd',
    },
    totalAmount: {
      fontSize: responsiveFontSize(2.4),
      fontWeight: 'bold',
      color: '#000',
    },
    buyNowButton: {
      backgroundColor: 'rgba(93, 23, 55, 1)',
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(5),
      borderRadius: 5,
    },
    buyNowText: {
      color: '#fff',
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
      width: '80%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    sizeOption: {
      padding: 10,
      borderRadius: 5,
      marginVertical: 5,
      alignItems: 'center',
    },
    closeButton: {
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 14,
    },
  });
  
  export default OrderSummary;