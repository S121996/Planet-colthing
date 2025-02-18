import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale, verticalScale } from 'react-native-size-matters';
import { debounce } from 'lodash';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('window');

const Filter = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const slideAnim = useRef(new Animated.Value(-width * 0.6)).current;

  const [selectedFilters, setSelectedFilters] = useState({
    Category: [],
    Type: [],
    Size: [],
    Color: [],
    Brands: [],
    Rating: [],
    Discount: [],
    SleeveLength: [],
    Pattern: [],
    Occasion: [],
    MainTrend: [],
    Features: [],
  });

  const handleOpenFilter = (section) => {
    setActiveFilter(section);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseFilter = () => {
    Animated.timing(slideAnim, {
      toValue: -width * 0.6,
      duration: 100,
      useNativeDriver: true,
    }).start(() => setActiveFilter(null));
  };

  const handleFilterChange = debounce((section, item) => {
    const updatedFilters = { ...selectedFilters };
    const isSelected = updatedFilters[section].includes(item);
    if (isSelected) {
      updatedFilters[section] = updatedFilters[section].filter((i) => i !== item);
    } else {
      updatedFilters[section].push(item);
    }
    setSelectedFilters(updatedFilters);
  }, 100);

  const renderFilterOptions = (section, items) => (
    <Animated.View
      style={[styles.filterPanel, { transform: [{ translateX: slideAnim }] }]}
    >
      <FlatList
        data={items}
        renderItem={({ item }) => {
          const isSelected = selectedFilters[section].includes(item);
          return (
            <TouchableOpacity
              onPress={() => handleFilterChange(section, item)}
              style={[
                styles.filterOption,
                isSelected && styles.selectedFilterOption,
              ]}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  isSelected && styles.selectedFilterOptionText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.listContent}
      />
    </Animated.View>
  );

  const clearFilters = () => {
    setSelectedFilters({
      Category: [],
      Type: [],
      Size: [],
      Color: [],
      Brands: [],
      Rating: [],
      Discount: [],
      SleeveLength: [],
      Pattern: [],
      Occasion: [],
      MainTrend: [],
      Features: [],
    });
  };

  const applyFilters = () => {
    if (
      selectedFilters.Category.length === 0 &&
      selectedFilters.Type.length === 0 &&
      selectedFilters.Size.length === 0 &&
      selectedFilters.Color.length === 0 &&
      selectedFilters.Brands.length === 0
    ) {
      Alert.alert('Validation Error', 'Please select at least one filter.');
      return;
    }
    navigation.navigate('YourTargetScreen', { filters: selectedFilters });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.sidebar}>
          <ScrollView>
            {[
              'Category',
              'Type',
              'Size',
              'Color',
              'Brands',
              'Rating',
              'Discount',
              'SleeveLength',
              'Pattern',
              'Occasion',
              'MainTrend',
              'Features',
            ].map((section) => (
              <TouchableOpacity
                key={section}
                style={styles.filterButton}
                onPress={() => handleOpenFilter(section)}
              >
                <FontAwesome
                  name="circle-thin"
                  size={width * 0.05}
                  color={selectedFilters[section]?.length ? 'orange' : 'grey'}
                  style={styles.icon}
                />
                <Text style={styles.filterButtonText}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.categorySymbol}>
          {activeFilter &&
            renderFilterOptions(
              activeFilter,
              {
                Category: ['Men', 'Women'],
                Type: ['Casual Shoe', 'Sport Shoe', 'Formal Shoe', 'Boats'],
                Size: ['S', 'M', 'L', 'XL'],
                Color: ['Red', 'Green', 'Blue', 'Yellow'],
                Brands: ['Cloths', 'Shoes'],
                Rating: [1, 2, 3, 4],
                Discount: [20, 30, 40, 70],
                SleeveLength: [
                  'Long Sleeves',
                  'Short Sleeves',
                  'Three-Quarter Sleeves',
                ],
                Pattern: ['SelfDesign', 'Striped', 'Faded', 'Colourblocked'],
                Occasion: ['Party', 'Formal', 'Casual'],
                MainTrend: [
                  'Abstract',
                  'Animal or Skin Print',
                  'Colourblocked',
                  'Conversational Print',
                  'Crochet',
                  'Ethnic Print',
                  'Geometric Print',
                  'Indigo',
                  'Monochrome',
                  'Micro or Ditsy Print',
                  'Nautical',
                  'New Basics',
                  'Pastels',
                  'Placement Print',
                  'Multi or Variegated Stripes',
                  'Tie and Dye',
                  'Tropical',
                ],
                Features: ['NA', 'Wrinkle Free'],
              }[activeFilter]
            )}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={clearFilters} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  sidebar: {
    width: width * 0.4,
    borderRightWidth: 2,
    borderColor: 'rgba(233,157,197,1)',
  },
  categorySymbol: {
    flex: 1,
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:verticalScale(20),
    marginLeft:scale(14)
  },
  filterButtonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: responsiveScreenFontSize(2),
  },
  icon: {
    marginRight: scale(10),
  },
  filterPanel: {
    width: width * 0.6,
    height: height * 0.8,
    backgroundColor: '#fff',
    marginBottom:verticalScale(2),
  },
  filterOption: {
    padding: verticalScale(8),
    margin: verticalScale(5),
    borderRadius: 5,
    borderWidth: 1,
  },
  selectedFilterOption: {
    backgroundColor: 'rgba(93,23,55,1)',
  },
  filterOptionText: {
    fontSize: width * 0.04,
  },
  selectedFilterOptionText: {
    color: '#fff',
    textAlign: 'center',
  },
  listContent: {
    padding: scale(5),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(16),
    backgroundColor: '#fff',
    elevation: 10,
  },
  clearButton: {
    width:scale(120),
    height:verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'rgba(93,23,55,1)',
    borderWidth: 2,
  },
  clearButtonText: {
    fontSize: responsiveScreenFontSize(2.5),
    color: 'rgba(93,23,55,1)',
  },
  applyButton: {
    height: verticalScale(35),
    width: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(93,23,55,1)',
    borderRadius: 5,
  },
  applyButtonText: {
    fontSize: responsiveScreenFontSize(2.5),
    color: '#fff',
  },
});

export default Filter;