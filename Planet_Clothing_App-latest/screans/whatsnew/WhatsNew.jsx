import React from 'react';
import { Dimensions, Image, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { scale, verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const data3 = [
  {
    id: 1,
    image: require('../../assets/images/image17.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    text1: 'White Formal Shirt',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: 2,
    image: require('../../assets/images/image18.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Red Checked Shirt',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: 3,
    image: require('../../assets/images/image19.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
    text1: 'Brown Velvet Pants',
    realprice: 'Rs1289',
    previousprice: 'Rs3000',
    per: '55%off',
  },
  {
    id: 4,
    image: require('../../assets/images/image20.png'),
    heartimage: require('../../assets/images/whiteheart.png'),
    addToCartImage: require('../../assets/mens_categories_images/Addtocart.png'),
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
    data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const LootLoSale = () => {
  const navigation = useNavigation();
  const numColumns = getNumberOfColumns(); // Number of items per row

  const renderItem2 = ({ item }) => {
    if (item.empty) {
      return <View />;
    }

    const singleproduct = () => {
      // Pass the appropriate data to the SingleProducts screen
      navigation.navigate('SingleProducts', { data: item });
    };

    return (
      <View style={{ flex: 1, margin: scale(6), alignItems: 'center' }}>
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

        <View style={{ justifyContent: 'center', width: scale(140), marginTop: verticalScale(20) }}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: responsiveScreenFontSize(2),
              }}
            >
              {item.text1}
            </Text>
          </View>
          <View style={[styles.pricemaincontainer, { justifyContent: 'center', alignSelf: 'center' }]}>
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
          <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: responsiveScreenWidth(100), height: responsiveScreenHeight(50) }}
            source={require('../../assets/mens_categories_images/Posterwhatsnew.png')}
          />
        </View>
      </View>
      </View>
          </>
        }
          data={formatData(data3, numColumns)}
          renderItem={renderItem2}
          keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
        />
      
  );
};

const styles = StyleSheet.create({
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
});

export default LootLoSale;
