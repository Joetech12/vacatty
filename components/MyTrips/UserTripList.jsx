import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { TouchableOpacity } from "react-native";
import UserTripCard from "./UserTripCard";

export default function UserTripList({ userTrips }) {
  const latestTrip =
    userTrips?.length > 0 && JSON.parse(userTrips[0]?.tripData);
  const allTrip = userTrips?.length > 0 && JSON.parse(userTrips[0]?.tripData);
  console.log({
    pk: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip?.locationInfo?.photRef}&key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
  });
  return (
    <View>
      <View className='mt-[20px]'>
        {latestTrip?.locationInfo?.photRef ? (
          <Image
            className='h-[240px] w-[100%] object-cover rounded-[15px]'
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTrip?.locationInfo?.photRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            }}
          />
        ) : (
          <Image
            className='h-[240px] w-[100%] object-cover rounded-[15px]'
            source={require("./../../assets/images/phd.jpg")}
          />
        )}
        <View className='mt-[10px]'>
          <Text className='text-[20px]' style={{ fontFamily: "outfitMedium" }}>
            {latestTrip?.locationInfo?.name}
          </Text>
          <View className='flex-row space-x-[0px] items-center justify-between'>
            <Text
              className='text-[16px] text-gray-600'
              style={{ fontFamily: "outfit" }}
            >
              {moment(latestTrip?.startDate)?.format("DD MMM YYYY")}
            </Text>
            <View className='flex-row space-x-[3px] items-center'>
              <Text
                className='text-[18px] text-gray-600 mt-[-5px]'
                style={{ fontFamily: "outfit" }}
              >
                🚌
              </Text>
              <Text
                className='text-[16px] mt-[0px] text-gray-600 '
                style={{ fontFamily: "outfit" }}
              >
                {latestTrip?.traveler?.title}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className='p-[20px] bg-black  rounded-[15px] mt-[15px]'
            // onPress={onClickContinue}
          >
            <Text
              style={{ fontFamily: "outfitMedium" }}
              className='text-white text-center'
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips?.map((trip, i) => {
          return (
            <View key={i}>
              {/* <Text>{trip?.userEmail}</Text> */}
              {userTrips?.length > 0 && <UserTripCard trip={trip} key={i} />}
            </View>
          );
        })}
      </View>
    </View>
  );
}
