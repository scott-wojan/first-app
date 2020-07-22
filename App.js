import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from 'expo';
import AuthNavigation from './navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App({ navigation }) {
  // SplashScreen.preventAutoHide();
  // setTimeout(SplashScreen.hide, 5000);

  const [state, dispatch] = React.useReducer();

  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
