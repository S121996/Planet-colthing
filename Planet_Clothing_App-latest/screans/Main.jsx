import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BlackFridayModal from './sale/modal/BlackFridayModal';
import {useNavigation} from '@react-navigation/native';
import ScrollSale from '../component/mainscreencomponent/ScrollSale';
import SliderCategories from '../component/mainscreencomponent/SliderCategories';
import HomeList from '../component/mainscreencomponent/HomeList';
import UpComingStyle from '../component/mainscreencomponent/UpComingStyle';
import TopBrands from '../component/mainscreencomponent/TopBrand';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
export default function Home() {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <View style={{backgroundColor: 'white'}}>
            {/* BlackfridaySaleMOdal */}
            <BlackFridayModal />
            {/* searchcontainer */}
            <View>
              <View style={styles.searchfiltermain}>
                <View style={styles.searchmain}>
                  <Image
                    style={styles.searchimage}
                    source={require('../assets/images/searchimage1.png')}></Image>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(0, 0, 0, 1)'}
                    placeholder="Search product here..."></TextInput>
                </View>
                <View style={styles.filterimage}>
                  <Image
                    source={require('../assets/images/bellicon3.png')}></Image>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LootLoSale')}
                  style={styles.bellimage}>
                  <Image source={require('../assets/images/Gift3.png')}></Image>
                </TouchableOpacity>
              </View>
              {/* SaleDiscountBlackfridaysalecomponent */}
              <ScrollSale />
              {/* Category */}
              <SliderCategories />
              {/* newusercode/coupancodecontainer */}
              <View style={styles.newusercontainer}>
                <View style={styles.newuser1}>
                  <Text style={[styles.newusers,{fontSize:responsiveScreenFontSize(2)}]}>New User?</Text>
                  <Text style={[styles.flatoff,{fontSize:responsiveScreenFontSize(2)}]}>FLAT ₹200 OFF</Text>
                </View>
                <View style={styles.newuser2}>
                  <Text style={{color: 'black', fontWeight: 'bold',fontSize:responsiveScreenFontSize(1.5)}}>
                    CODE :
                  </Text>
                  <View style={[styles.newuser200,{justifyContent:'center'}]}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:responsiveScreenFontSize(1.2)
                      }}>
                      NEWUSER200
                    </Text>
                  </View>
                  <View style={styles.circlecontainer2}>
                    <View style={styles.circle2} />
                  </View>
                </View>
              </View>
              {/* TopBRANDS/scrollcontainer */}
              <TopBrands />
              {/* upcomingStyles */}
              <UpComingStyle />
              {/* ItemList */}
              <HomeList />
            </View>
          </View>
          
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchfiltermain: {
    display: 'flex',
    flexDirection: 'row',
    height:hp('6%') ,
    width:wp('40%'),
    alignItems: 'center',
  },
  searchmain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchimage: {
    marginLeft:wp('5%'),
  },
  input: {
    paddingLeft:wp('5%'),
  },
  scaneimage: {
    marginLeft: wp('14'),
  },
  filterimage: {
    marginLeft: wp('18%'),
  },
  bellimage: {
    marginLeft:wp('12%'),
  },
  newusercontainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: hp('2.5%'),
    height:hp('8%'),
    position: 'relative',
  },
  newuser1: {
    flex: 1,
    borderColor: 'rgba(217, 217, 217, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  newuser2: {
    flex: 1,
    backgroundColor: 'rgba(233, 157, 194, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newusers: {
    fontWeight: 'bold',
    color: 'black',
  
  },
  flatoff: {
    fontWeight: 'bold',
    color: 'black',
  },
  newuser200: {
    height: hp('3.4%'),
    width: wp('24%'),
    backgroundColor: 'black',
    borderRadius: 8.4,
  },
  circlecontainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('50%'),
  },
  circle2: {
    marginBottom:hp('8%'),
    width: wp('10%'),
    height:hp('5%'),
    borderRadius: 100,
    borderWidth:wp('0.4%'),
    borderColor: 'rgba(217, 217, 217, 1)',
    backgroundColor: 'white',
  }
});

