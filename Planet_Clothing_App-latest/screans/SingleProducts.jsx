import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { scale, verticalScale } from 'react-native-size-matters';

const SingleProducts = ({route, navigation}) => {
  const [morereview, setMorereview] = useState(false);
  const [sizesToDisplay, setSizesToDisplay] = useState([]);

  const arr = [1, 2, 3, 4, 5];
  const newarr = arr.slice(0, 2);
  const restarr = arr.slice(2);

  const {data} = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [currIndex, setCurrIndex] = useState(0);
  const Data = [1, 2, 3, 4];

  const menimage = {
    one: require('../assets/tempimages/image.png'),
    one: require('../assets/tempimages/image1.png'),
    one: require('../assets/tempimages/image2.png'),
    one: require('../assets/tempimages/image3.png'),
  };

  const imagemap = {
    one: require('../assets/tempimages/13.png'),
    two: require('../assets/tempimages/14.png'),
    three: require('../assets/tempimages/15.png'),
    four: require('../assets/tempimages/16.png'),
  };

  const footmap = {
    one: require('../assets/tempimages/foot1.png'),
    two: require('../assets/tempimages/foot2.png'),
    three: require('../assets/tempimages/foot3.png'),
    four: require('../assets/tempimages/foot4.png'),
  };
  const imageDisplay =
    data[0] === 'FootWearCategory'
      ? footmap
      : data[0] === 'ManCategory'
      ? menimage
      : imagemap;

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const sizes1 = [6, 7, 8, 9, 10, 11];

  // const { data } = route.params;

  const a = useEffect(() => {
    if (data[0] === 'FootWearCategory') {
      setSizesToDisplay(sizes1);
    } else {
      setSizesToDisplay(sizes);
    }
  }, [data]);

  const handlePress = size => {
    console.log(`${size} button pressed`);
  };

  return (
    <View style={styles.container}>
      {/* <SinglePageHeader navigation={navigation} data={data} /> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <FlatList
            data={Data} // Ensure 'data' is an array of image sources or identifiers
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrIndex((x / windowWidth).toFixed(0));
            }}
            renderItem={({item, index}) => (
              <View style={styles.image}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/tempimages/tempimage.png')}
                />
              </View>
            )}
          />

          <View style={styles.indicatorContainer}>
            {Data.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  {
                    backgroundColor: currIndex == index ? 'black' : 'grey',
                    width:
                      currIndex == index
                        ? responsiveWidth(5)
                        : responsiveWidth(2),
                  },
                ]}
              />
            ))}
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Women Formal White Shirt</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>MRP Rs.899</Text>
              <Text style={styles.discountedPrice}>MRP Rs.399</Text>
              <View style={styles.discountWrapper}>
                <Text style={styles.discountText}>20% OFF</Text>
                <Image
                  style={styles.discountBackground}
                  source={require('../assets/images/DiscountBackground.png')}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sizeSelection}>
          
          <Text style={styles.sizeTitle}>Select Size</Text>
          <View style={styles.sizeContainer}>
            {sizesToDisplay.map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(size)}
                style={styles.sizeButton}>
                <Text style={styles.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Product Details</Text>
            <Text style={styles.sectionText}>
              White Solid Formal Shirt has a Spead Collar, Button packet, long
              regular sleeves Curved hem
            </Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Size & Fit</Text>
            <Text style={styles.sectionText}>Fit: Regular Fit</Text>
            <Text style={styles.sectionText}>
              The Model Height 5'8 is Wearing a size s
            </Text>
          </View>
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Material & care</Text>
            <Text style={styles.sectionText}>Cotton</Text>
            <Text style={styles.sectionText}>Handwash</Text>
          </View>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity>
            <View style={styles.wishlistButton}>
              <AntDesign
                name="hearto"
                size={responsiveWidth(4)}
                color={'black'}
                style={styles.icon}
              />
              <Text style={styles.actionText}>Wishlist</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cartButton}>
              <SimpleLineIcons
                name="handbag"
                size={responsiveWidth(4)}
                color={'white'}
                style={styles.icon}
              />
              <Text style={styles.cartText}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewContainer}>
          <FontAwesome
            name="star-o"
            size={hp('4%')}
            color="rgba(255, 215, 0, 1.0)"
          />
          <FontAwesome
            name="star-o"
            size={hp('4%')}
            color="rgba(255, 215, 0, 0.8)"
          />
          <FontAwesome
            name="star-o"
            size={hp('4%')}
            color="rgba(255, 215, 0, 0.6)"
          />
          <FontAwesome
            name="star-o"
            size={hp('4%')}
            color="rgba(255, 215, 0, 0.4)"
          />
          <FontAwesome
            name="star-o"
            size={hp('4%')}
            color="rgba(255, 215, 0, 0.2)"
          />
          <Text style={styles.helpfulText}>Helpful?</Text>
          <TouchableOpacity>
            <FontAwesome
              name="thumbs-o-up"
              size={responsiveWidth(5)}
              color={'black'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.helpfulCount}>23</Text>
          <TouchableOpacity>
            <FontAwesome
              name="thumbs-o-down"
              size={responsiveWidth(5)}
              color={'black'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.reviewList}>
          {newarr.map((item, index) => (
            <View key={index} style={styles.reviewItem}>
              <View style={styles.reviewImageContainer}>
                <Image
                  source={require('../assets/images/Shoesimage7.png')}
                  style={styles.reviewImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.reviewContent}>
                <Text style={styles.reviewText}>
                  Generating random text can be useful for a variety of
                  applications. Here’s a basic way to generate random text using
                  JavaScript. This example uses a predefined set of characters
                  to create a string of random length:
                </Text>
                <View style={styles.reviewFooter}>
                  <View style={styles.sizeBoughtContainer}>
                    <Text style={styles.sizeBoughtText}>Size Bought:6</Text>
                  </View>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>4.2</Text>
                    <AntDesign
                      name="staro"
                      size={hp('2.5%')}
                      color={'yellow'}
                    />
                  </View>
                </View>
                <Text style={styles.reviewDate}>Rahul On 17th July 2024</Text>
              </View>
            </View>
          ))}
          {morereview &&
            restarr.map((item, index) => (
              <View key={index} style={styles.reviewItem}>
                <View style={[styles.reviewImageContainer]}>
                  <Image
                    source={require('../assets/images/Shoesimage7.png')}
                    style={styles.reviewImage}
                    resizeMode='contain'
                  />
                </View>
                <View style={styles.reviewContent}>
                  <Text style={styles.reviewText}>
                    Generating random text can be useful for a variety of
                    applications. Here’s a basic way to generate random text
                    using JavaScript. This example uses a predefined set of
                    characters to create a string of random length:
                  </Text>
                  <View style={styles.reviewFooter}>
                    <View style={styles.sizeBoughtContainer}>
                      <Text style={styles.sizeBoughtText}>Size Bought:6</Text>
                    </View>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingText}>4.2</Text>
                      <AntDesign
                        name="staro"
                        size={hp('2%')}
                        color={'yellow'}
                      />
                    </View>
                  </View>
                  <Text style={styles.reviewDate}>Rahul On 17th July 2024</Text>
                </View>
              </View>
            ))}
          <View
            style={{
              marginTop:verticalScale(30),
              height: 1,
              backgroundColor: 'pink', // Color of the line
              marginVertical: 1,
            }}
          />
          <TouchableOpacity onPress={() => setMorereview(!morereview)}>
            <View style={styles.showMoreContainer}>
              <Text style={styles.showMoreText}>
                {morereview ? 'Show More' : 'View all Reviews'}
              </Text>
              <AntDesign
                name="right"
                size={responsiveWidth(5)}
                color={'black'}
                backgroundColor={'rgba(233,157,194,1)'}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              backgroundColor: 'pink', // Color of the line
              marginVertical: 10,
            }}
          />
        </View>

        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', color:'black',fontSize:responsiveScreenFontSize(3)}}>
            Similar Products
          </Text>
          <Text style={{color: 'rgba(207,132,168,1)',marginTop:verticalScale(3),fontSize:responsiveScreenFontSize(2)}}>
            Don't miss out these products{' '}
          </Text>
        </View>
        <View
          style={{
            marginTop: responsiveHeight(3),
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {Data.map((item, index) => (
            <View style={styles.productcontainer} key={index}>
              <View style={styles.productimage}>
                <View style={styles.cart}>
                  <View>
                    <TouchableOpacity>
                      <Image
                        source={require('../assets/mens_categories_images/Vector.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Image
                        source={require('../assets/mens_categories_images/Addtocart.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SingleProducts', {data: newdata})
                  }>
                  <Image
                    source={
                      item === 1
                        ? imageDisplay.one
                        : item === 2
                        ? imageDisplay.two
                        : item === 3
                        ? imageDisplay.three
                        : item === 4
                        ? imageDisplay.four
                        : null
                    }
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.producttext}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: responsiveScreenFontSize(2),
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageWrapper: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(280),
    height: verticalScale(270),
  },
  indicatorContainer: {
    flexDirection: 'row',
  },
  indicator: {
    height: verticalScale(7),
    borderRadius:responsiveScreenWidth(3),
    marginHorizontal: scale(4),
  },
  productInfo: {
    marginVertical: hp('1%'),
    marginRight: hp('1%'),
  },
  productName: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: 'bold',
    color:'black'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: responsiveScreenFontSize(2),
    textDecorationLine: 'line-through',
    marginRight: responsiveScreenWidth(3),
  },
  discountedPrice: {
    fontSize: responsiveScreenFontSize(3),
    color: '#000',
    fontWeight: 'bold',
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
    top: verticalScale(10),
    marginLeft: hp('1'),
  },
  discountBackground: {
    height:responsiveScreenHeight(4),
    width: responsiveScreenWidth(20),
    bottom: hp('2%'),
    marginLeft: scale(5),
  },
  sizeSelection: {
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: 'rgba(233,157,194,1)',
  },
  sizeTitle: {
    fontSize: responsiveScreenFontSize(2),
    color:'Black',
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: verticalScale(4),
  },
  sizeButton: {
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: responsiveWidth(1),
    margin: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: responsiveScreenFontSize(2.4),
  },
  detailsContainer: {
    paddingHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2),
  },
  detailsSection: {
    marginBottom: responsiveHeight(2),
  },
  sectionTitle: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
    color:'black'
  },
  sectionText: {
    fontSize:responsiveScreenFontSize(1.8),
    marginTop: verticalScale(2),
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    backgroundColor: 'rgba(233,157,194,1)',
    height:verticalScale(90),
    width:responsiveScreenWidth(100),
    alignItems:'center'
  },
  wishlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: verticalScale(40),
    width: scale(150),
  },
  cartButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    height: verticalScale(40),
    width: scale(150),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: scale(5),
  },
  actionText: {
    fontSize:responsiveScreenFontSize(2),
    color: 'black',
    marginLeft:scale(9),
  },
  cartText: {
    fontSize:responsiveScreenFontSize(2),
    color: 'white',
    marginLeft: scale(9)
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(3),
  },
  helpfulText: {
    fontSize: responsiveScreenFontSize(2.5),
    marginLeft: responsiveWidth(4),
    fontWeight: 'bold',
    color:'black'
  },
  helpfulCount: {
    fontSize: responsiveScreenFontSize(2),
    marginVertical: responsiveWidth(2),
    marginLeft: scale(4),
    color:'black'
  },
  reviewItem: {
    flexDirection: 'row',
    margin: responsiveHeight(2),
  },
  reviewImageContainer: {
    width:scale(120),
    height: verticalScale(200),
  },
  reviewImage: {
    width: scale(120),
    height:verticalScale(120),
    // backgroundColor:'red'
  },
  reviewContent: {
    flex: 1,
    marginLeft: scale(3),
  },
  reviewText: {
    fontSize: responsiveScreenFontSize(1.9),
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(1),
  },
  sizeBoughtContainer: {
    backgroundColor: '#f0f0f0',
    padding: responsiveWidth(2),
    borderRadius: 5,
  },
  sizeBoughtText: {
    fontSize: responsiveScreenFontSize(1.8),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    width: scale(60),
  },
  ratingText: {
    fontSize: responsiveScreenFontSize(2),
    marginRight: responsiveWidth(1),
    fontWeight: 'bold',
  },
  reviewDate: {
    fontSize: responsiveScreenFontSize(2),
    color: 'grey',
    marginTop: verticalScale(2),
  },
  showMoreContainer: {
    flexDirection: 'row',
    width:responsiveScreenWidth(100),
    height:verticalScale(50),
    // justifyContent:'center',
    alignItems:'center'
  },
  showMoreText: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(4),
  },
  productcontainer: {
    height: responsiveHeight(40),
    width: responsiveHeight(20),
    margin: responsiveWidth(2),
  },
  productimage: {
    borderRadius: responsiveWidth(1),
    overflow: 'scroll',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  producttext: {
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
    right: '6%',
  },
});

export default SingleProducts;
