import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();

  const [startDate, setstartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setstartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelection = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show("Please select start and end date", ToastAndroid.LONG);
      return;
    }
    const totalDays = moment(endDate).diff(moment(startDate), "days") + 1;
    console.log({ totalDays });
    setTripData({ ...tripData, startDate, endDate, totalDays });
    router.push("/create-trip/select-budget");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  console.log({ tripData });

  return (
    <View className='p-[25px] pt-[75px] bg-white h-[100%]'>
      <Text
        className='text-[25px] mt-[20px]'
        style={{ fontFamily: "outfitBold" }}
      >
        Travel Dates
      </Text>

      <View className='mt-[30px]'>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          //   maxRangeDuration={10}
          selectedRangeStyle={{
            backgroundColor: Colors?.primary,
          }}
          selectedDayTextStyle={{
            color: Colors?.white,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelection}
        // onPress={() => navigation.push("create-trip/select-traveler")}
        className='p-[20px] bg-black  rounded-[15px] mt-[20px]'
      >
        <Text
          style={{ fontFamily: "outfitMedium" }}
          className='text-white text-center'
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
