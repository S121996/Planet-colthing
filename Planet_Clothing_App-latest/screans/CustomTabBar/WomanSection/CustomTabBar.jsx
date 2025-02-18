import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Animated,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';

const filterIcon = require('../../../assets/images/filterimage.png');

const CustomTabBar = ({ state, descriptors, navigation, position }) => {
  const inputRange = state.routes.map((_, i) => i);
  const indicatorWidth = scale(50) + 35; // Adjust width based on your label style
  const tabWidth = indicatorWidth;
  const translateX = position.interpolate({
    inputRange,
    outputRange: inputRange.map(i => i * indicatorWidth),
  });

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
        <Image resizeMode="contain" source={filterIcon} style={styles.icon} />
      </TouchableOpacity>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Animated.View
          style={[
            styles.indicator,
            {
              width: tabWidth,
              transform: [{ translateX }],
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}>
              <View style={styles.toptabtextmaincontainer}>
                {options.tabBarIcon && options.tabBarIcon({ focused: isFocused })}
                <Text
                  style={[
                    styles.label,
                    {
                      color: isFocused ? 'black' : 'black',
                      opacity: state.routes[state.index].name === route.name ? 1 : 0.5, // Adjust opacity based on focus
                    },
                  ]}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: responsiveWidth(6),
    height: responsiveHeight(2.7),
    marginHorizontal: responsiveWidth(2),
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(90),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(1),
  },
  label: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.5),
  },
  toptabtextmaincontainer: {
    backgroundColor: 'rgba(214, 218, 200, 1)',
    width: responsiveWidth(15),
    height: responsiveHeight(5),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    height: 5,
    backgroundColor: 'black',
    bottom: 0,
    borderRadius: 5,
  },
});

export default CustomTabBar;
