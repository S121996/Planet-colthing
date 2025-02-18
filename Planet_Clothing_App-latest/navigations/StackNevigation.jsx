import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {createStackNavigator} from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();

import DrawerTabNaviagtion from './DrawerTabNaviagtion';
import LoginPage from '../authentication/LoginPage';
import Verify from '../authentication/Verify';
import Welcome from '../authentication/Welcome';
import Top_Tab_Navigation from './Top_Tab_Navigation';
import Top_Tab_Navigation_Womens from './Top_Tab_Navigation_Womens';
import Top_Tab_Navigation_Footware from './Top_Tab_navigation_Footware';
import SingleProducts from '../screans/SingleProducts';
import LootLoSale from '../screans/sale/LootLoSale';
import Details from '../authentication/Details';

import Filter from '../screans/filter/Filter';
import Brands from '../screans/filter/filterfiles/Brands';
import Category from '../screans/filter/filterfiles/Category';
import Cloths from '../screans/filter/filterfiles/Cloths';
import Color from '../screans/filter/filterfiles/Color';
import Discount from '../screans/filter/filterfiles/Discount';
import Features from '../screans/filter/filterfiles/Features';
import MainTrend from '../screans/filter/filterfiles/MainTrend';
import Occasion from '../screans/filter/filterfiles/Occasion';
import Pattern from '../screans/filter/filterfiles/Pattern';
import Shoes from '../screans/filter/filterfiles/Shoes';
import Size from '../screans/filter/filterfiles/Size';
import SleeveLength from '../screans/filter/filterfiles/SleeveLength';
import Type from '../screans/filter/filterfiles/Type';

import BlackFridayModal from '../screans/sale/modal/BlackFridayModal';
import BlackFridaySale from '../screans/sale/modal/BlackFridaySale';
import WhatsNew from '../screans/whatsnew/WhatsNew';
import OrderSummary from '../screans/OrderSummary';
import Address from '../screans/address/Address';
import AddAddress from '../screans/address/AddAddress';
import Delete from '../screans/address/Delete';
import TheCoupon from '../screans/TheCoupon';
import SizeChart from '../screans/footware/SizeChart';
import ManCategory from '../screans/CustomTabBar/ManSection/ManCategory';
import WomanCategory from '../screans/CustomTabBar/WomanSection/WomanCategory';
import FootWearCategory from '../screans/CustomTabBar/FootWearSection/FootWearCategory';
import Notification from '../screans/About/Notification';
import AboutUs from '../screans/About/AboutUs';
import PrivacyPolicy from '../screans/About/PrivacyPolicy';
import TermsOfUse from '../screans/About/TermsOfUse';
import Order from '../screans/Order/Order';
import OrderDetails from '../screans/Order/OrderDetails';
import PaymentSuccess from '../screans/Payment/PaymentSuccess';



const StackNevigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DrawerTabNaviagtion"
        component={DrawerTabNaviagtion}
      />
      <Stack.Screen name="Top_Tab_Navigation" component={Top_Tab_Navigation} />
      <Stack.Screen
        name="Top_Tab_Navigation_Womens"
        component={Top_Tab_Navigation_Womens}
      />
      <Stack.Screen
        name="Top_Tab_Navigation_Footware"
        component={Top_Tab_Navigation_Footware}
      />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Welcome" component={Welcome} />
      

      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{headerShown: 'true'}}
      />
      <Stack.Screen
        name="Brands"
        component={Brands}
        options={{headerShown: 'true', headerTitle: 'filter'}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: 'true', headerTitle: 'filter'}}
      />
      <Stack.Screen
        name="Cloths"
        component={Cloths}
        options={{headerShown: 'true', headerTitle: 'filter'}}
      />
      <Stack.Screen
        name="Color"
        component={Color}
        options={{headerShown: 'true', headerTitle: 'filter'}}
      />
      <Stack.Screen
        name="Discount"
        component={Discount}
        options={{headerShown: 'true', headerTitle: 'filter'}}
      />
      <Stack.Screen name="Features" component={Features} />
      <Stack.Screen name="MainTrend" component={MainTrend} />
      <Stack.Screen name="Occasion" component={Occasion} />
      <Stack.Screen name="Pattern" component={Pattern} />
      <Stack.Screen name="Shoes" component={Shoes} />
      <Stack.Screen name="Size" component={Size} />
      <Stack.Screen name="SleeveLength" component={SleeveLength} />
      <Stack.Screen name="Type" component={Type} />

      <Stack.Screen name='Aboutus'  component={ AboutUs } options={{headerShown:'true'}}  />
      <Stack.Screen  name='Notification' component={Notification} options={{headerShown:'true'}}    />
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{headerShown:'true'}}   />
      <Stack.Screen name='TermsOfUse' component={TermsOfUse} options={{headerShown:'true'}}     />
      <Stack.Screen name='Order'  component={Order} options={{headerShown:'true'}}  />
      <Stack.Screen name='OrderDetails' component={OrderDetails}   options={{headerShown:'true'}}  />
      <Stack.Screen name='PaymentSuccess'  component={PaymentSuccess}  options={{headerShown:'true'}}   />
 
      <Stack.Screen name="BlackFridayModal" component={BlackFridayModal} />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{headerShown: 'true'}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{headerShown: 'true'}}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          headerShown: 'true',
          headerStyle: {backgroundColor: 'violet'},
        }}
      />
      <Stack.Screen name="Delete" component={Delete} />
      <Stack.Screen
        name="TheCoupon"
        component={TheCoupon}
        options={{headerShown: 'true'}}
      />
      <Stack.Screen name="SizeChart" component={SizeChart} />
      <Stack.Screen
        name="SingleProducts"
        component={SingleProducts}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackVisible: true,
          headerLeft: () => (
            <View style={Styles.headerleftcontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    marginLeft: responsiveScreenWidth(1),
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="WhatsNew"
        component={WhatsNew}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackVisible: true,
          headerLeft: () => (
            <View style={Styles.headerleftcontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    marginLeft: responsiveScreenWidth(1),
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
              <View style={{marginLeft: responsiveWidth(12)}}>
                <Image
                  source={require('../assets/images/searchimage1.png')}></Image>
              </View>
              <View style={{marginLeft:responsiveScreenWidth(3)}}>
                <TextInput placeholder="Search product here..." />
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ManCategory"
        component={ManCategory}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackVisible: true,
          headerLeft: () => (
            <View style={Styles.headerleftcontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                    marginLeft:responsiveScreenWidth(4)
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
              <View style={{marginLeft: responsiveWidth(12)}}>
                <Image
                  source={require('../assets/images/searchimage1.png')}></Image>
              </View>
              <View style={{marginLeft:responsiveScreenWidth(3)}}>
                <TextInput placeholder="Search product here..." />
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="WomanCategory"
        component={WomanCategory}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackVisible: true,
          headerLeft: () => (
            <View style={Styles.headerleftcontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                    marginLeft:responsiveScreenWidth(2)
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
              <View style={{marginLeft: responsiveWidth(12)}}>
                <Image
                  source={require('../assets/images/searchimage1.png')}></Image>
              </View>
              <View style={{marginLeft:responsiveScreenWidth(3)}}>
                <TextInput placeholder="Search product here..." />
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="FootWearCategory"
        component={FootWearCategory}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackVisible: true,
          headerLeft: () => (
            <View style={Styles.headerleftcontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                    marginLeft:responsiveScreenWidth(2)
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
              <View style={{marginLeft: responsiveWidth(12)}}>
                <Image
                  source={require('../assets/images/searchimage1.png')}></Image>
              </View>
              <View style={{marginLeft:responsiveScreenWidth(3)}}>
                <TextInput placeholder="Search product here..." />
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BlackFridaySale"
        component={BlackFridaySale}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitleVisible: true,
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: responsiveWidth(3)}}>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={[Styles.navigate]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
              <View style={Styles.search}>
                <View>
                  <Image
                    source={require('../assets/images/searchimage1.png')}></Image>
                </View>
                <View style={{marginLeft: wp('3%')}}>
                  <TextInput placeholder="Search product here..." />
                </View>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="LootLoSale"
        component={LootLoSale}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackVisible: true,
          headerRight: () => (
            <View style={Styles.headerRightcontainer}>
              <TouchableOpacity>
                <Image source={require('../assets/images/blackheart.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: responsiveWidth(3)}}>
                <Image source={require('../assets/images/addtocardbag.png')} />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={[Styles.navigate]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: responsiveScreenHeight(2.5),
                    width: responsiveScreenWidth(7),
                  }}
                  source={require('../assets/images/Arrow.png')}
                />
              </TouchableOpacity>
              <View style={Styles.search}>
                <View>
                  <Image
                    source={require('../assets/images/searchimage1.png')}></Image>
                </View>
                <View style={{marginLeft: wp('4%')}}>
                  <TextInput placeholder="Search product here..." />
                </View>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNevigation;

const Styles = StyleSheet.create({
  headerRightcontainer: {
    width: wp('30%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  navigate: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('50%'),
    justifyContent: 'space-between',
    marginLeft: wp('5%'),
    // backgroundColor:'red'
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('9%'),
  },
  headerleftcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(55),
    justifyContent: 'space-between',
  },
});
