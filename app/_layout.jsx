// import { useFonts } from 'expo-font';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    outfitMedium: require("../assets/fonts/Outfit-Medium.ttf"),
    outfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
  });

  const [loggedUser, setLoggedUser] = useState(null);
  const [tripData, setTripData] = useState([]);

  async function getUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setLoggedUser(JSON.parse(user));
    } else {
      setLoggedUser(null);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <CreateTripContext.Provider
      value={{ loggedUser, setLoggedUser, tripData, setTripData }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='(tabs)' />
        {/* <Stack.Screen name='index' options={{ headerShown: false }} /> */}
      </Stack>
    </CreateTripContext.Provider>
  );
}
