import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const data3 = [
  {
    id: 1,
    text1: 'Delivery on March 10',
    text2: 'Black cotton men shirt',
    image: require('../../assets/tempimages/Capture1.png'),
    goto: require('../../assets/tempimages/GoTo.png'),
  },
  {
    id: 2,
    text1: 'Delivery on March 10',
    text2: 'Black cotton men shirt',
    image: require('../../assets/tempimages/Capture2.png'),
    goto: require('../../assets/tempimages/GoTo.png'),
  },
  {
    id: 3,
    text1: 'Delivery on March 10',
    text2: 'Black cotton men shirt',
    image: require('../../assets/tempimages/Capture1.png'),
    goto: require('../../assets/tempimages/GoTo.png'),
  },
  {
    id: 4,
    text1: 'Delivery on March 10',
    text2: 'Black cotton men shirt',
    image: require('../../assets/tempimages/Capture2.png'),
    goto: require('../../assets/tempimages/GoTo.png'),
  },
];

const {width} = Dimensions.get('window');

const numColumns = 1;

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
    data3.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return data3;
};

const Order = () => {
  const navigation = useNavigation(); // Access navigation

  const renderItem2 = ({item}) => {
    if (item.empty) {
      return <View />;
    }

    return (
      <View>
        <View
          style={{
            marginTop: verticalScale(10),
            height: verticalScale(120),
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{justifyContent: 'center', marginLeft: scale(6)}}>
            <Image source={item.image} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
              <Image style={{marginLeft: scale(250)}} source={item.goto} />
            </TouchableOpacity>

            <View style={{height: verticalScale(60), padding: 14}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveScreenFontSize(2),
                  fontWeight: 'bold',
                }}>
                {item.text1}
              </Text>
              <Text style={{marginTop: verticalScale(4)}}>{item.text2}</Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 3,
                backgroundColor: 'rgba(20, 112, 250, 1)',
                height: verticalScale(20),
                width: scale(50),
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: scale(200),
              }}>
              <Text style={{color: 'white'}}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: 'rgba(227, 222, 222, 1)', // Color of the line
            marginVertical: 10,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Search your Order here"
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
      <FlatList
        data={formatData(data3, numColumns)}
        renderItem={renderItem2}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
      />
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
    width: scale(280),
    height: verticalScale(20),
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: verticalScale(30),
  },
  searchIcon: {
    position: 'absolute',
    left: scale(250),
  },
});

export default Order;
