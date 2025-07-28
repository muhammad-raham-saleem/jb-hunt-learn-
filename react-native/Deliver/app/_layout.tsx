import { Stack, SplashScreen } from "expo-router";
import './globals.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {
  const [fonstLoaded, error] = useFonts({
    'Quicksand': require('../assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Semibold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
  });

  useEffect(()=>{
    if(error) throw error;
    if(fonstLoaded) SplashScreen.hideAsync();
  }, [fonstLoaded,error])

  return <Stack screenOptions={{ headerShown: false }} />;
}
