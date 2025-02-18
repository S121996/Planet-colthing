import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
  } from 'react-native';
  
  import React, {useEffect, useRef, useState} from 'react';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import {useNavigation} from '@react-navigation/native';
  const {width} = Dimensions.get('window');
  const pages = [
    {
      id: 1,
      text1: 'Autumn Sale',
      text2: 'Up to',
      per: '50%',
      buynow: 'Buy now',
      image: require('../../assets/images/image12.png'),
    },
    {
      id: 2,
      text1:'',
      image: require('../../assets/images/Blackfridayimage.png'),
    },
    {
      id: 3,
      text1: 'Autumn Sale',
      text2: 'Up to',
      per: '50%',
      buynow: 'Buy now',
      image: require('../../assets/images/image12.png'),
    },
  ];
  

export default function ScrollSale() {
    const scrollViewRef = useRef(null);
    const [activePage, setActivePage] = useState(0);
    const navigation =useNavigation()


    const handleScroll = event => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const activePageIndex = Math.round(scrollX / width);
        setActivePage(activePageIndex);
      };

      useEffect(() => {
        const intervalId = setInterval(() => {
          const nextPage = (activePage + 1) % pages.length;
          scrollViewRef.current.scrollTo({ x: nextPage * width, animated: true });
          setActivePage(nextPage);
        }, 2000); // Scroll every 3 seconds
    
        return () => clearInterval(intervalId); // Clear interval on component unmount
      }, [activePage]);

  return (
    <View style={styles.salescontainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              ref={scrollViewRef}>
              {pages.map(page => (
                <View style={styles.salesimagecontainer} key={page.id}>
                  <View>
                    <Text style={styles.autumncontainer}>{page.text1}</Text>
                    <Text style={styles.uptocontainer}>
                      {page.text2}
                      <Text
                        style={{
                          color: 'blue',
                          fontSize:hp('4%'),
                        }}>
                        {page.per}
                      </Text>
                    </Text>
                    <TouchableOpacity style={{marginTop:hp('3%')}}>
                      {page.id == 2 ? (
                        <TouchableOpacity onPress={() => navigation.navigate('BlackFridaySale')}>
                        <Image
                          resizeMode='cover'
                          style={[
                            styles.salesimagecontainer,
                            {marginTop:hp('-10%')},
                          ]}
                          source={page.image}></Image>
                          </TouchableOpacity>
                      ) : (
                        <Text style={styles.buynowcontainer}>
                          {page.buynow}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View>
                    {page.id == 2 ? <View></View> : (
                      <Image
                        style={{marginTop: hp('3%')}}
                        source={page.image}></Image>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.dotsContainer}>
              {pages.map((_, index) => (
                <View
                  key={index}
                  style={[styles.dot, activePage === index && styles.activeDot]}
                />
              ))}
            </View>
          </View>
  )
}

const  styles=StyleSheet.create({
    salescontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:hp('4%'),
        height: hp('30%'),
      },
      salesimagecontainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(245, 228, 238, 1)',
        width: wp('100%'),
        height: hp('24%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      autumncontainer: {
        fontSize:hp('3.5%'),
        color: 'black',
        fontWeight: 'bold',
      },
      uptocontainer: {
        fontSize:hp('2.5%'),
        color: 'black',
        fontWeight: 'bold',
      },
      buynowcontainer: {
        borderRadius: 20,
        backgroundColor: 'rgba(0, 58, 208, 1)',
        color: 'white',
        width:wp('20%'),
        height: hp('4%'),
      textAlign:'center',
      textAlignVertical:'center'
      },
      dotsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: hp('2%'),
      },
      dot: {
        height:hp('1.5%'),
        width: wp('2%'),
        borderRadius: 5,
        backgroundColor: '#888',
        marginHorizontal: wp('1%'),
      },
      activeDot: {
        backgroundColor: 'black',
      },
})