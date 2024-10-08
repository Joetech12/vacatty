import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);

  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Select Your budget", ToastAndroid.LONG);
      return;
    } else {
      router.push("/create-trip/review-trip");
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    if (selectedOption) {
      setTripData({ ...tripData, budget: selectedOption?.title });
    }
  }, [selectedOption]);

  console.log({ tripData });

  return (
    <View className='p-[25px]  pt-[75px]  h-[100%] bg-white'>
      <Text
        className='text-[25px] mt-[20px]'
        style={{ fontFamily: "outfitBold" }}
      >
        Budget
      </Text>

      <View>
        <Text
          className='text-[18px] mt-[10px]'
          style={{ fontFamily: "outfitBold" }}
        >
          Choose spending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              className='my-[10px]'
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        className='p-[20px] bg-black  rounded-[15px] mt-[20px]'
        onPress={onClickContinue}
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
