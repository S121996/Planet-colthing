import React,{useEffect} from 'react'
import {Dimensions, Image, SafeAreaView} from 'react-native';
import { View,StyleSheet,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions'
const MyBottomTabBar = ({navigation,state, activeTintColor,inactiveTintColor}) => {

  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const sliderPosition = useSharedValue(0);

  const animatedSliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sliderPosition.value }],
    };
  });

  
  useEffect(() => {
    sliderPosition.value = withSpring(state.index * tabWidth);
  }, [state.index, tabWidth]);

  const animatedValueHome = useSharedValue(0);
  const animatedValueAbout = useSharedValue(0);
  const animatedValueCart = useSharedValue(0);
  const animatedValueProfile = useSharedValue(0);
  const animatedValueFav = useSharedValue(0);


  const animatedStyleHome = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedValueHome.value }]
    };
  });

  const animatedStyleAbout = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedValueAbout.value }],
    };
  });

  const animatedStyleCart = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedValueCart.value }],
    };
  });

  const animatedStyleProfile = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedValueProfile.value }],
    };
  });

  const animatedStyleFav = useAnimatedStyle(()=>{
    return{
      transform: [{translateY: animatedValueFav.value}],
    };
  });

  useEffect(() => {
    
    animatedValueHome.value = withSpring(0);
    animatedValueAbout.value = withSpring(0);
    animatedValueCart.value = withSpring(0);
    animatedValueProfile.value = withSpring(0);
    animatedValueFav.value = withSpring(0);

    if (state.index === 0) {
      animatedValueHome.value = withSpring(-26);
    } else if (state.index === 1) {
      animatedValueAbout.value = withSpring(-26);
    } else if (state.index === 2) {
      animatedValueCart.value = withSpring(-26);
    } else if (state.index == 3){
      animatedValueFav.value = withSpring(-26)
    } else if (state.index === 4) {
      animatedValueProfile.value = withSpring(-26);
    }
  }, [state.index]);


  return (
    <View style={styles.parent}>
    <View style={styles.main}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Main')}} ><Animated.View style={[styles.route,animatedStyleHome]}><FontAwesome name='home' size={30} color={state.index === 0 ? activeTintColor : inactiveTintColor} /></Animated.View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('About')}><Animated.View style={[styles.route,animatedStyleAbout]}><Ionicons name='shirt' size={30} color={state.index === 1 ? activeTintColor : inactiveTintColor} /></Animated.View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}><Animated.View style={[styles.route,animatedStyleCart]}><FontAwesome name='cart-plus' size={30} color={state.index === 2 ?activeTintColor : inactiveTintColor} /></Animated.View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Favourite')}><Animated.View style={[styles.route,animatedStyleFav]}><FontAwesome name='heart' size={30} color={state.index === 3 ?activeTintColor : inactiveTintColor} /></Animated.View></TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}><Animated.View style={[styles.route,animatedStyleProfile]}><FontAwesome  name='user' size={30} color={state.index === 4 ?activeTintColor : inactiveTintColor}/></Animated.View></TouchableOpacity>
    </View>
    <View style={{position:'absolute',zIndex:5,width:'100%',height:responsiveHeight(3)}}>
    <Animated.View style={[animatedSliderStyle,{borderRadius:50,marginLeft:responsiveWidth(6.2)}]}>
    <Image source={require('../../assets/mens_categories_images/Shadow.png')}/>
    </Animated.View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parent:{
    borderWidth:1,
    height: responsiveHeight(7),
    position: 'relative',
    justifyContent:'flex-end'
  },
  main:{
    backgroundColor:'white',
    zIndex:1,
    height:responsiveHeight(7),
    flexDirection:'row',justifyContent:'space-around',alignItems:'center',
    margin:0,padding:0
  },
  route:{
    height:responsiveHeight(7),width:responsiveWidth(14),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:responsiveWidth(20),
  }
})

export default MyBottomTabBar