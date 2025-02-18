import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale, verticalScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const data3 = [
  {
    id: '1',
    image: require('../../../assets/images/image17.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'White Formal Shirt',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: '2',
    image: require('../../../assets/images/image18.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Red Checked Shirt',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: '3',
    image: require('../../../assets/images/image19.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Brown Velvet Pants',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: '4',
    image: require('../../../assets/images/image20.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Loose Pants',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
];

const getNumberOfColumns = () => {
  return width < 600 ? 2 : 5; // Mobile screens: 2 columns, Tablet screens: 5 columns
};

const formatData = (data, numColumns) => {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return data;
};

const Man = () => {
  const navigation = useNavigation();
  const numColumns = getNumberOfColumns(); // Number of items per row

  const renderItem2 = ({item}) => {
    if (item.empty) {
      return <View />;
    }
    const singleproduct = () => {
      // Pass the appropriate data to the SingleProducts screen
      navigation.navigate('SingleProducts', {data: item});
    };

    return (
      <View style={styles.itemContainer}>
        <View style={{marginTop:verticalScale(20), position: 'relative'}}>
        <View style={{position: 'relative', zIndex: 1}}>
          <Image style={{}} source={item.image}></Image>
        </View>
        <View
          style={{
            position: 'relative',
            zIndex: 2,
            left:scale(110),
            marginTop:verticalScale(9),
            position: 'absolute',
          }}>
          <Image style={{}} source={item.heartimage}></Image>
        </View>
        <View
          style={{
            position: 'relative',
            zIndex: 2,
            left: scale(90),
            marginTop:verticalScale(130),
            position: 'absolute',
          }}>
          <Image style={{}} source={item.addToCartImage}></Image>
        </View>
      </View>

        <View
          style={{
            justifyContent: 'center',
            width: scale(140),
            marginTop: verticalScale(20),
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: responsiveScreenFontSize(2),
              }}>
              {item.text1}
            </Text>
          </View>
          <View
            style={[
              styles.pricemaincontainer,
              {justifyContent: 'center', alignSelf: 'center'},
            ]}>
            <Text>{item.realprice}</Text>
            <Text style={styles.previouspricetext}>{item.previousprice}</Text>
            <Text style={styles.pertext}>{item.per}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={styles.trendscontainer}>
            <Text style={styles.trendtextcontainer}>Trends, In Demand</Text>
          </View>
          <View style={styles.shopnowcontainer}>
            <Image
              resizeMode="contain"
              style={styles.shopnowimage}
              source={require('../../../assets/mens_categories_images/Group1000001775.png')}
            />
            <View style={styles.shopnowtextcontainer}>
              <Image
                resizeMode="contain"
                style={styles.shopimage}
                source={require('../../../assets/images/SHOPNOW.png')}
              />
            </View>
          </View>
        </>
      }
      data={formatData(data3, numColumns)}
      renderItem={renderItem2}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    margin: scale(6),
    alignItems: 'center',
  },
  heartImage: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: responsiveScreenWidth(11),
    marginTop: verticalScale(10),
  },
  productImage: {
    zIndex: 0,
  },
  textContainer: {
    justifyContent: 'center',
    width: scale(140),
    marginTop: verticalScale(20),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2),
  },
  pricemaincontainer: {
    flexDirection: 'row',
    marginTop: verticalScale(2),
  },
  previouspricetext: {
    textDecorationLine: 'line-through',
    marginLeft: scale(2),
  },
  pertext: {
    color: 'green',
    marginLeft: scale(2),
  },
  trendscontainer: {
    backgroundColor: 'black',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(100),
    borderTopLeftRadius: responsiveScreenWidth(6),
    borderTopRightRadius: responsiveScreenWidth(6),
    marginTop: responsiveScreenHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendtextcontainer: {
    color: 'white',
    fontSize: responsiveScreenFontSize(2.8),
  },
  shopnowcontainer: {
    backgroundColor: 'rgba(214, 218, 200, 1)',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopnowtextcontainer: {
    position: 'absolute',
    zIndex: 1,
  },
  shopnowimage: {
    zIndex: 0,
  },
  shopimage: {
    marginTop: responsiveScreenHeight(14),
  },
});

export default Man;
