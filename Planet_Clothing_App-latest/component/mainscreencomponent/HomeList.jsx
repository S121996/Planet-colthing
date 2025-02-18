import {View, Text, Image, Dimensions, FlatList} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
const {width} = Dimensions.get('window');

const data3 = [
  {
    id: 1,
    heartimage: require('../../assets/images/redheart.png'),
    image: require('../../assets/images/image4.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Elegant Blazer',
    price: 'Rs 1289',
  },
  {
    id: 2,
    image: require('../../assets/images/image5.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Casual Jeans',
    price: 'RS 1699',
  },
  {
    id: 3,
    image: require('../../assets/images/image6.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Casual Jeans',
    price: 'RS 998',
  },
  {
    id: 4,
    image: require('../../assets/images/image7.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Casual Jeans',
    price: 'RS 1699',
  },
  {
    id: 5,
    image: require('../../assets/images/image8.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Casual Jeans',
    price: 'RS 798',
  },
  {
    id: 6,
    image: require('../../assets/images/image9.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Casual Jeans',
    price: 'RS 598',
  },
  {
    id: 7,
    image: require('../../assets/images/image10.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    type: 'Casual Jeans',
    price: 'RS 1699',
  },
];

const getNumberOfColumns = () => {
  if (width < 800) {
    return 2; // Mobile screen
  } else {
    return 4; // Tablet screens
  }
};

const numColumns = getNumberOfColumns(); 

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
    <View style={{flex: 1, margin:responsiveScreenWidth(3)}}>
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
            marginTop:verticalScale(170),
            position: 'absolute',
          }}>
          <Image style={{}} source={item.addToCartImage}></Image>
        </View>
      </View>
      <View style={{alignItems: 'center', margintop: 20}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: responsiveScreenFontSize(2.5),
          }}>
          {item.type}
        </Text>
        <Text style={{fontSize: responsiveScreenFontSize(2)}}>
          {item.price}
        </Text>
      </View>
    </View>
  );
};

export default function HomeList() {
  return (
    <View>
      <FlatList
        data={formatData(data3, numColumns)}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}
