import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Shoes = ({ searchQuery = '', setSearchQuery = () => {}, navigation }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
 

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedBrand(null);
    setSelectedCategory('Brands');
    setSearchQuery('');
  };

  const applyFilters = () => {
    console.log('Filters applied');
    navigation.navigate('FilteredResults', { selectedBrand, selectedCategory });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
   

      <View style={styles.mainContent}>
        <View style={styles.sidebar}>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Category' && styles.selectedSidebarButton,
            ]}
            onPress={() => {
              handleCategorySelect('Category');
              navigation.navigate('Category');
            }}>
            <Text style={styles.sidebarText}>
              <Icon
                name="circle-thin"
                size={15}
                color={selectedCategory === 'Category' ? 'orange' : 'grey'}
              />
              {' '}Category
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Type' && styles.selectedSidebarButton,
            ]}
            onPress={() => {
              handleCategorySelect('Type');
              navigation.navigate('Type');
            }}>
            <Text style={styles.sidebarText}>
              <Icon
                name="circle-thin"
                size={15}
                color={selectedCategory === 'Type' ? 'orange' : 'grey'}
              />
              {' '}Type
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Size' && styles.selectedSidebarButton,
            ]}
            onPress={() => {
              handleCategorySelect('Size');
              navigation.navigate('Size');
            }}>
            <Text style={styles.sidebarText}>
              <Icon
                name="circle-thin"
                size={15}
                color={selectedCategory === 'Size' ? 'orange' : 'grey'}
              />
              {' '}Size
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Color' && styles.selectedSidebarButton,
            ]}
            onPress={() => {
              handleCategorySelect('Color');
              navigation.navigate('Color');
            }}>
            <Text style={styles.sidebarText}>
              <Icon
                name="circle-thin"
                size={15}
                color={selectedCategory === 'Color' ? 'orange' : 'grey'}
              />
              {' '}Color
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Brands' && styles.selectedSidebarButton,
            ]}
            onPress={() => {
              handleCategorySelect('Brands');
            }}>
            <Text style={styles.sidebarText}>
              <Icon
                name="circle-thin"
                size={15}
                color={selectedCategory === 'Brands' ? 'orange' : 'grey'}
              />
              {' '}Brands
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Filter' && styles.selectedSidebarButton,
            ]}
            onPress={() => {
              handleCategorySelect('Filter');
              navigation.navigate('Filter');
            }}>
            <Text style={styles.sidebarText}>
              <Icon
                name="circle-thin"
                size={15}
                color={selectedCategory === 'Filter' ? 'orange' : 'grey'}
              />
              {' '}Ratings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Discount' && styles.selectedSidebarButton
            ]}
            onPress={() => {
              setSelectedCategory('Discount');
              navigation.navigate('Discount')
            }}>
            <Text style={styles.sidebarText}>
              <Icon name="circle-thin" size={15} color={selectedCategory === 'Filter' ? 'orange' : 'grey'} />
              {' '}Discount
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'SleeveLength' && styles.selectedSidebarButton
            ]}
            onPress={() => {
              setSelectedCategory('SleeveLength');
              navigation.navigate('SleeveLength')
              
            }}>
            <Text style={styles.sidebarText}>
              <Icon name="circle-thin" size={15} color={selectedCategory === 'SleeveLength' ? 'orange' : 'grey'} />
              {' '}SleeveLength
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Pattern' && styles.selectedSidebarButton
            ]}
            onPress={() => {
              setSelectedCategory('Pattern');
              
            }}>
            <Text style={styles.sidebarText}>
              <Icon name="circle-thin" size={15} color={selectedCategory === 'Pattern' ? 'orange' : 'grey'} />
              {' '}Pattern
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Occasion' && styles.selectedSidebarButton
            ]}
            onPress={() => {
              setSelectedCategory('Occasion');
              navigation.navigate('Occasion');
             
              
            }}>
            <Text style={styles.sidebarText}>
              <Icon name="circle-thin" size={15} color={selectedCategory === 'Occasion' ? 'orange' : 'grey'} />
              {' '}Occasion
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'MainTrend' && styles.selectedSidebarButton
            ]}
            onPress={() => {
              setSelectedCategory('MainTrend');
              navigation.navigate('MainTrend');
             
              
            }}>
            <Text style={styles.sidebarText}>
              <Icon name="circle-thin" size={15} color={selectedCategory === 'MainTrend' ? 'orange' : 'grey'} />
              {' '}MainTrend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sidebarButton,
              selectedCategory === 'Features' && styles.selectedSidebarButton
            ]}
            onPress={() => {
              setSelectedCategory('Features');
              navigation.navigate('Features');
             
              
            }}>
            <Text style={styles.sidebarText}>
              <Icon name="circle-thin" size={15} color={selectedCategory === 'Features' ? 'orange' : 'grey'} />
              {' '}Features
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.brandOptions}>
          {['Adidas', 'Puma', 'Campus','Sparx','Roadster','Nick'].map((brand) => (
            <TouchableOpacity
              key={brand}
              onPress={() =>{ handleBrandSelect(brand)
                
              }}>
              <Text
                style={[
                  styles.brandOption,
                  selectedBrand === brand && styles.selectedBrandOption,
                ]}>
                {brand}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
          <Text>Clear Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} >
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    paddingRight: 20,
  },
  sidebar: {
    backgroundColor: 'rgba(214,218,200,1)',
    height: '100%',
    width: '50%',
  },
  sidebarButton: {
    margin: 10,
    paddingHorizontal: 10,
  },
  selectedSidebarButton: {
    backgroundColor: 'rgba(214,218,200,0.5)',
  },
  sidebarText: {
    fontWeight: 'bold',
    fontSize: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandOptions: {
    margin: 20,
  },
  brandOption: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: 100,
    padding: 10,
    textAlign: 'center',
  },
  selectedBrandOption: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
  },
  footer: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(214,218,200,1)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  clearButton: {
    height: 40,
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButton: {
    height: 40,
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#fff',
  },
});

export default Shoes;
