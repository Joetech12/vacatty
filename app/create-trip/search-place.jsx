import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SearchPlace() {
  const navigation = useNavigation();

  const router = useRouter();

  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View className='p-[25px] pt-[75px] bg-white h-[100%]'>
      <GooglePlacesAutocomplete
        placeholder='Search Place'
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setTripData({
            locationInfo: {
              name: data.description,
              lat: details.geometry.location.lat,
              lng: details.geometry.location.lng,
              coordinates: details.geometry.location,
              photRef: details?.photos?.[0]?.photo_reference,
              url: details?.url,
            },
          });

          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 6,
            marginTop: 25,
          },
        }}
      />
    </View>
  );
}
