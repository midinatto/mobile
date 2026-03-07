import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavagation from './src/pages/AppNavagation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();


// Impede a tela de splash de sumir antes das fontes carregarem
//SplashScreen.preventAutoHideAsync();
export default function App() {
  
  return (
   <GestureHandlerRootView style={{flex: 1}}>
    <AppNavagation />
   </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
