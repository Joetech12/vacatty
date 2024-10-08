import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);

  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  const onClickContinue = () => {
    // setTripData({ ...tripData, budget: selectedOption?.title });
    router.replace("/create-trip/generate-trip");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  // useEffect(() => {
  //   if (selectedOption) {
  //     setTripData({ ...tripData, budget: selectedOption?.title });
  //   }
  // }, [selectedOption]);

  console.log({ tripData });

  return (
    <View className='p-[25px]  pt-[75px]  h-[100%] bg-white'>
      <Text
        className='text-[25px] mt-[20px]'
        style={{ fontFamily: "outfitBold" }}
      >
        Review your trip
      </Text>

      <View>
        <Text
          className='text-[18px] mt-[10px]'
          style={{ fontFamily: "outfitBold" }}
        >
          Please review your selection before generating a trip
        </Text>

        {/* Destination Info */}
        <View className='flex-row space-x-[20px] mt-[40px]'>
          {/* <Ionicons name='location-sharp' size={40} color='black' /> */}
          <Text className='text-[30px]'>📍</Text>
          <View>
            <Text
              className='text-[18px] text-primary/50'
              style={{ fontFamily: "outfit" }}
            >
              Destination
            </Text>
            <Text
              className='text-[18px]'
              style={{ fontFamily: "outfitMedium" }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Date Selection */}
        <View className='flex-row space-x-[20px] mt-[20px]'>
          {/* <Ionicons name='location-sharp' size={40} color='black' /> */}
          <Text className='text-[30px]'>📅</Text>
          <View>
            <Text
              className='text-[18px] text-primary/50'
              style={{ fontFamily: "outfit" }}
            >
              Travel Date
            </Text>
            <Text
              className='text-[18px]'
              style={{ fontFamily: "outfitMedium" }}
            >
              {moment(tripData?.startDate)?.format("DD.MMM") +
                " - " +
                moment(tripData?.endDate)?.format("DD.MMM")}{" "}
              ({tripData?.totalDays} days)
            </Text>
          </View>
        </View>

        {/* Traveler Info */}
        <View className='flex-row space-x-[20px] mt-[20px]'>
          {/* <Ionicons name='location-sharp' size={40} color='black' /> */}
          <Text className='text-[30px]'>🚌</Text>
          <View>
            <Text
              className='text-[18px] text-primary/50'
              style={{ fontFamily: "outfit" }}
            >
              Who is Traveling
            </Text>
            <Text
              className='text-[18px]'
              style={{ fontFamily: "outfitMedium" }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View className='flex-row space-x-[20px] mt-[20px]'>
          {/* <Ionicons name='location-sharp' size={40} color='black' /> */}
          <Text className='text-[30px]'>💵</Text>
          <View>
            <Text
              className='text-[18px] text-primary/50'
              style={{ fontFamily: "outfit" }}
            >
              Budget
            </Text>
            <Text
              className='text-[18px]'
              style={{ fontFamily: "outfitMedium" }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        className='p-[20px] bg-black  rounded-[15px] mt-[50px]'
        onPress={onClickContinue}
      >
        <Text
          style={{ fontFamily: "outfitMedium" }}
          className='text-white text-center'
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
