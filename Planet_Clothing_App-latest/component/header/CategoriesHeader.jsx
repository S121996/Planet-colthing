import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
const CategoriesHeader = ({navigation}) => {
  return (
    <View
      style={{
        height: responsiveHeight(8),
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: responsiveWidth(5),
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <FontAwesome6
          name="arrow-left-long"
          size={responsiveWidth(6)}
          color={'grey'}
        />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: responsiveWidth(5),
          fontSize: responsiveFontSize(3),
        }}>
        Categories
      </Text>
    </View>
  );
};

export default CategoriesHeader;
