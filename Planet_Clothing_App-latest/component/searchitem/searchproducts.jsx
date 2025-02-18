import React,{useContext} from 'react'
import { Text,View,StyleSheet } from 'react-native'
import { Mycontext } from '../header/TopTabHeader'
import { responsiveWidth } from 'react-native-responsive-dimensions'
const Searchproducts = () => {
  const value = useContext(Mycontext)
  return (
    <View style={styles.main}>
      <Text>{value}</Text>
    </View>
  )
}

export default Searchproducts

const styles = StyleSheet.create({
  main:{
    backgroundColor:'white',
    marginHorizontal:responsiveWidth(10)
  },
})
