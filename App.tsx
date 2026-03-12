import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Ajuste esse caminho se o seu App.tsx estiver em outro lugar!
import AppNavigation from './src/pages/AppNavagation'; 

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}