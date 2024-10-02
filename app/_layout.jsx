import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
// import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    outfitMedium: require("../assets/fonts/Outfit-Medium.ttf"),
    outfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <Stack
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
