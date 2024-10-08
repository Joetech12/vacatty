import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View className='p-[20] mt-[50] flex items-center gap-[20px]'>
      <Ionicons
        name='location-sharp'
        size={30}
        color='black'
        className='mt-[0px]'
      />
      <Text className='text-[25px]' style={{ fontFamily: "outfitMedium" }}>
        No trips planned yet
      </Text>

      <Text
        className='text-[20px] leading-[24px] text-center text-black/50 mt-[0px]'
        style={{ fontFamily: "outfit" }}
      >
        Looks like it's time to plan a new travel experience! Get Started below
      </Text>

      <TouchableOpacity
        className='p-[15px] bg-primary rounded-[15px] px-[30px]'
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Text
          className='text-white text-[17px] text-center'
          style={{ fontFamily: "outfitMedium" }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
