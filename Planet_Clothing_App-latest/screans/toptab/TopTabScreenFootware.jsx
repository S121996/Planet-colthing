import React,{useEffect} from 'react'
import { View,Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import { responsiveHeight,responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
const TopTabScreenFootware = ({navigation,descriptors,state}) => {
    const translateX = useSharedValue(0);
    useEffect(() => {
        const tabIndex = state.index;
        const tabWidth = responsiveWidth(33);
        translateX.value = withSpring(tabWidth * tabIndex, {
          damping: 2,
          stiffness: 200,
          overshootClamping: true,
          mass: 0.5,
        });
      }, [state.index]);
      const animatedSliderStyle = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: translateX.value }],
        };
      });
      const isHomeSection = state.routes[state.index].name === 'HomeScreenFootware';
  return (
    <View style={styles.main}>
    <View style={styles.contentbar}>
    <View style={[styles.content1,{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'white'}]}><View style={{height:responsiveWidth(6),width:responsiveWidth(6)}}><TouchableOpacity onPress={()=>navigation.navigate('Filter')}><Image resizeMode='contain' style={{height:responsiveWidth(6),width:responsiveWidth(6)}} source={require('../../assets/mens_categories_images/Layer2.png')}/></TouchableOpacity></View><View><TouchableOpacity onPress={()=>navigation.navigate('HomeScreenFootware')}><Image style={{height:responsiveHeight(4),width:responsiveWidth(8)}} source={require('../../assets/mens_categories_images/ShoesLogo1.png')}/></TouchableOpacity></View></View>
    <TouchableOpacity onPress={()=>navigation.navigate('Men')}><View style={styles.content}><Text style={styles.Gender}>Men</Text></View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Women')}><View style={styles.content}><Text style={styles.Gender}>Women</Text></View></TouchableOpacity>
    </View>
    <View style={{height:responsiveHeight(1),marginTop:responsiveHeight(2)}}>
    {!isHomeSection && <Animated.View style={[styles.slider, animatedSliderStyle]} />}
    </View>
    </View>
  )
}

export default TopTabScreenFootware

const styles = StyleSheet.create({
    main:{
        height:responsiveHeight(8),
        backgroundColor:'white',
    },
    contentbar:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    content1:{
      backgroundColor:'#D6DAC8',
        marginTop:responsiveHeight(0.7),
        height:responsiveHeight(5),
        width:responsiveWidth(22),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:responsiveWidth(1),
  },
    content:{
        backgroundColor:'rgba(163, 90, 125, 1)',
        marginTop:responsiveHeight(0.7),
        height:responsiveHeight(5),
        width:responsiveWidth(22),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:responsiveWidth(1),
    },
    slider: {
        position: 'absolute',
        bottom: responsiveHeight(0.5),
        left:responsiveWidth(9.5),
        height: responsiveHeight(0.6),
        width: responsiveWidth(16),
        backgroundColor: 'black',
        borderRadius: responsiveWidth(2),
    },
    Gender:{
      fontSize:responsiveFontSize(1.9),
      color:'white'
    }
})