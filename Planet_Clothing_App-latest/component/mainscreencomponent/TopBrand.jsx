import { useEffect, useRef, useState } from 'react';
import {View, Text, StyleSheet,Image,ScrollView, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const pages = [
    {
      id: 1,
      image1: [
        {
          id: 1,
          brandname: 'RAREISM',
          off: 'up To 40% off',
          image: require('../../assets/images/Rectangle22562.png'),
        },
      ],
      image2: [
        {
          id: 2,
          brandname: 'HIGHLANDER',
          off: 'up To 60% off',
          image: require('../../assets/images/Rectangle22562.png'),
        },
      ],
    },
    {
      id: 2,
      image1: [
        {
          id: 1,
          brandname: 'RAREISM',
          off: 'up To 40% off',
          image: require('../../assets/images/Rectangle22562.png'),
        },
      ],
      image2: [
        {
          id: 2,
          brandname: 'HIGHLANDER',
          off: 'up To 60% off',
          image: require('../../assets/images/Rectangle22562.png'),
        },
      ],
    },
  ];
  
  

export default function TopBrands() {
    const scrollViewRef = useRef(null);
const [activePage1, setActivePage1] = useState(0);
const [activePage, setActivePage] = useState(0);


    const handleScroll1 = event => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const activePageIndex = Math.round(scrollX / width);
        setActivePage1(activePageIndex);
      };

      const renderSections = sections => {
        return sections.map(section => (
          <View style={styles.brandoff} key={section.id}>
            <View>
              <Image
                style={{position: 'absolute', zIndex: 0}}
                source={require('../../assets/images/Rectangle22562.png')}></Image>
              <View style={styles.brandstyletext}>
                <Text style={styles.rareismtext}>RAREISM</Text>
                <Text style={{color: 'white'}}>up To 40% off</Text>
              </View>
            </View>
            <View style={{marginLeft: wp('40%')}}>
              <Image
                style={{position: 'absolute', zIndex: 0}}
                source={require('../../assets/images/Rectangle22563.png')}></Image>
              <View style={styles.brandstyletext}>
                <Text style={styles.highlandertext}>HIGHLANDER</Text>
                <Text style={{color: 'white'}}>up To 60% off</Text>
              </View>
            </View>
          </View>
        ));
      };
      const flattenedPages = pages.flatMap(page => [...page.image1, ...page.image2]);

      useEffect(() => {
        const intervalId = setInterval(() => {
          const nextPage = (activePage + 1) % flattenedPages.length;
          scrollViewRef.current.scrollTo({ x: nextPage * width, animated: true });
          setActivePage(nextPage);
        }, 2000); // Scroll every 3 seconds
    
        return () => clearInterval(intervalId); // Clear interval on component unmount
      }, [activePage]);
    
  return (
    <View>
      <View style={styles.topbrands}>
        <Text style={styles.topbrandtext}>TOP BRANDS</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:hp('3%'),
        }}></View>

      <View style={styles.container1}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll1}
          scrollEventThrottle={16}
          ref={scrollViewRef}>
          {pages.map(item => (
            <View key={item.id} style={styles.pageContainer}>
              {renderSections(item.image1)}
              {renderSections(item.image2)}
            </View>
          ))}
        </ScrollView>
        <View style={[styles.dotsContainer]}>
          {pages.flatMap((item, itemIndex) => [
            ...item.image1.map((_, index) => (
              <View
                key={`image1-${itemIndex}-${index}`}
                style={[
                  styles.dot,
                  activePage1 === itemIndex * 2 + index && styles.activeDot,
                ]}
              />
            )),
            ...item.image2.map((_, index) => (
              <View
                key={`image2-${itemIndex}-${index}`}
                style={[
                  styles.dot,
                  activePage1 === itemIndex * 2 + 1 + index &&
                    styles.activeDot,
                ]}
              />
            )),
          ])}
        </View>
      </View>
    </View>
  );
}

const  styles =StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:hp('30%'),
      }, 
      topbrands: {
        marginTop:hp('2%'),
        marginLeft:wp('5%'),
      },
      topbrandtext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:hp('2.5%'),
      },
      pageContainer: {
        flexDirection: 'row',
      },
      dotsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: hp('3%'),
      },
      dot: {
        height:hp('1.5%'),
        width: wp('2%'),
        borderRadius: 5,
        backgroundColor: '#888',
        marginHorizontal:wp('1%'),
      },
      activeDot: {
        backgroundColor: 'black',
      },
      brandoff: {
        flexDirection: 'row',
        width: wp('100%'),
        height:hp('5%'),
        borderRadius: 20,
        marginTop:hp('1%'),
        justifyContent: 'center',
      },
      rareismtext: {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 4,
      },
      highlandertext: {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 4,
      },
      brandstyletext: {
        zIndex: 1,
        marginLeft: wp('5%'),
        marginTop: hp('15%'),
      },
})