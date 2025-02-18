import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
const {width} = Dimensions.get('window');

const data3 = [
  {
    id: 1,
    image: require('../../../assets/images/image17.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'White Formal Shirt',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: 2,
    image: require('../../../assets/images/image18.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Red Checked Shirt',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: 3,
    image: require('../../../assets/images/image19.png'),
    heartimage: require('../../../assets/images/whiteheart.png'),
    addToCartImage: require('../../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Brown Velvet Pants',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: 4,
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
  if (width < 600) {
    return 2; // Mobile screen
  } else {
    return 5; // Tablet screens
  }
};

const numColumns = getNumberOfColumns(); // Number of items per row

const formatData = (data3, numColumns) => {
  if (!data3 || !Array.isArray(data3)) {
    return [];
  }

  const numberOfFullRows = Math.floor(data3.length / numColumns);
  let numberOfElementsLastRow = data3.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data3.push({id: 'blank-${numberOfElementsLastRow}', empty: true});
    numberOfElementsLastRow++;
  }
  return data3;
};

const renderItem2 = ({item}) => {
  if (item.empty) {
    return <View />;
  }

  return (
    <View style={{flex: 1, margin: scale(3), alignItems: 'center'}}>
      <View style={{marginTop: verticalScale(20), position: 'relative'}}>
        <View style={{position: 'relative', zIndex: 1}}>
          <Image style={{}} source={item.image}></Image>
        </View>
        <View
          style={{
            position: 'relative',
            zIndex: 2,
            left: scale(120),
            marginTop: verticalScale(9),
            position: 'absolute',
          }}>
          <Image style={{}} source={item.heartimage}></Image>
        </View>
        <View
          style={{
            position: 'relative',
            zIndex: 2,
            left: scale(95),
            marginTop: verticalScale(130),
            position: 'absolute',
          }}>
          <Image style={{}} source={item.addToCartImage}></Image>
        </View>
      </View>
      <View style={{marginTop: verticalScale(10)}}>
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
            Styles.pricemaincontainer,
            {justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <Text>{item.realprice}</Text>
          <Text style={Styles.previouspricetext}>{item.previousprice}</Text>
          <Text style={Styles.pertext}>{item.per}</Text>
        </View>
      </View>
    </View>
  );
};

export default function BlackFridaySale() {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={{backgroundColor: 'white', flex: 1}}>
            <View>
              <Image
                style={{
                  width: responsiveScreenWidth(100),
                  height: responsiveScreenHeight(50),
                }}
                source={require('../../../assets/images/Blackfridayimage1.png')}></Image>
            </View>

            <View style={{flex: 1}}></View>
          </View>
        </>
      }
      data={formatData(data3, numColumns)}
      renderItem={renderItem2}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  );
}

const Styles = StyleSheet.create({
  pricemaincontainer: {
    flexDirection: 'row',
    marginTop: verticalScale(2),
  },
  previouspricetext: {
    textDecorationLine: 'line-through',
    textAlign: 'center',
    marginLeft: scale(2),
  },
  pertext: {
    color: 'green',
    marginLeft: scale(2),
  },
});
