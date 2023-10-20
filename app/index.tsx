import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import Home from './Home';


SplashScreen.preventAutoHideAsync();

export default function App() {
  return <Home/>
}

