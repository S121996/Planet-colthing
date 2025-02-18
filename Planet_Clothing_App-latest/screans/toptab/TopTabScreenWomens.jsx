import React,{useEffect} from 'react'
import { View,Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import { responsiveHeight,responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
const TopTabScreenWomens = ({navigation,descriptors,state}) => {
    const translateX = useSharedValue(0);
    useEffect(() => {
        const tabIndex = state.index;
        const tabWidth = responsiveWidth(25);
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
      const isHomeSection = state.routes[state.index].name === 'HomeScreenWomens';
  return (
    <View style={styles.main}>
    <View style={styles.contentbar}>
    <View style={[styles.content1,{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'white'}]}><View style={{height:responsiveWidth(6),width:responsiveWidth(6)}}><TouchableOpacity onPress={()=>navigation.navigate('Filter')}><Image resizeMode='contain' style={{height:responsiveWidth(6),width:responsiveWidth(6)}} source={require('../../assets/mens_categories_images/Layer2.png')}/></TouchableOpacity></View><View><TouchableOpacity onPress={()=>navigation.navigate('HomeScreenWomens')}><Image style={{height:responsiveHeight(4),width:responsiveWidth(8)}} source={require('../../assets/mens_categories_images/Ellipse416.png')}/></TouchableOpacity></View></View>
    <TouchableOpacity onPress={()=>navigation.navigate('TopWear')}><View style={styles.content}><Text style={{fontSize:responsiveFontSize(1.9),color:'black'}}>Top Wear</Text></View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('BottomWear')}><View style={styles.content}><Text style={{fontSize:responsiveFontSize(1.9),color:'black'}}>Bottom Waer</Text></View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('PartyWear')}><View style={styles.content}><Text style={{fontSize:responsiveFontSize(1.9),color:'black'}}>Party Wear</Text></View></TouchableOpacity>
    </View>
    <View style={{height:responsiveHeight(1),marginTop:responsiveHeight(2)}}>
    {!isHomeSection && <Animated.View style={[styles.slider, animatedSliderStyle]} />}
    
    </View>
    </View>
  )
}

export default TopTabScreenWomens

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
        backgroundColor:'#D6DAC8',
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
        left:responsiveHeight(2.2),
        height: responsiveHeight(0.6),
        width: responsiveWidth(16),
        backgroundColor: 'black',
        borderRadius: responsiveWidth(2),
    },
}) 