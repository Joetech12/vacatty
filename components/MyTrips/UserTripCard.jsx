import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

export default function UserTripCard({ trip }) {
  const newTp = JSON.parse(trip?.tripData);
  //   console.log({ newTp, ll: newTp?.locationInfo });
  return (
    <View className='mt-[20px] flex-row space-x-[10px] items-center'>
      {/* <Image
        className='w-[80px] h-[80px] rounded-[10px]'
        source={require("./../../assets/images/login.jpg")}
      /> */}
      {newTp?.locationInfo?.photRef ? (
        <Image
          className='h-[80px] w-[80px] object-cover rounded-[10px]'
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${newTp?.locationInfo?.photRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
        />
      ) : (
        <Image
          className='h-[240px] w-[100%] object-cover rounded-[15px]'
          source={require("./../../assets/images/phd.jpg")}
        />
      )}
      <View className=''>
        <Text className='text-[18px]' style={{ fontFamily: "outfitMedium" }}>
          {newTp?.locationInfo?.name}
        </Text>
        <Text
          className='text-primary/50'
          style={{ fontFamily: "outfitMedium" }}
        >
          {moment(newTp?.startDate)?.format("DD MMM YYYY")}
        </Text>
        <Text
          className='text-primary/50'
          style={{ fontFamily: "outfitMedium" }}
        >
          {newTp?.traveler?.title}
        </Text>
      </View>
    </View>
  );
}
