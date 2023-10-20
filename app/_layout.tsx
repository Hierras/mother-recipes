import { StyleSheet, Text, View} from 'react-native';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import React, { useCallback, useState } from "react";

import Header from './Components/Header';

import { colors } from '../assets/colors';
import { store } from './user/store';

import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import DishCarousel from './Components/DishLists/DishCarousel';

SplashScreen.preventAutoHideAsync();

//let persistor = persistStore(store);

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    'Armata': require('../assets/fonts/Armata-Regular.ttf'),
    'LSO': require('../assets/fonts/LilyScriptOne-Regular.ttf'),
    'RC': require('../assets/fonts/RobotoCondensed-Regular.ttf')
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Header/>
          <Slot/>
        </SafeAreaView>
    </Provider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.mrBG,
    padding: 0,
    margin: 0
  },
});

