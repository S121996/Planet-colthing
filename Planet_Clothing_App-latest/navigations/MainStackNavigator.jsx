import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNevigation from './StackNevigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const MainStackNavigator = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <StackNevigation/>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default MainStackNavigator
