import React, { useEffect, useState, useCallback, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    if (selectedTraveler) {
      setTripData({ ...tripData, traveler: selectedTraveler });
    }
  }, [selectedTraveler]);

  return (
    <View className='p-[25px] pt-[75px] bg-white h-[100%]'>
      <Text
        className='text-[25px] mt-[20px]'
        style={{ fontFamily: "outfitBold" }}
      >
        Who's Traveling
      </Text>

      <View className='mt-[20px]'>
        <Text className='text-[23px]' style={{ fontFamily: "outfitBold" }}>
          Choose your travels
        </Text>

        <FlatList
          data={SelectTravelerList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              className='my-[10px]'
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity className='p-[20px] bg-black  rounded-[15px] mt-[20px]'>
        <Link
          href='/create-trip/select-dates'
          style={{ fontFamily: "outfitMedium" }}
          className='text-white text-center'
        >
          Continue
        </Link>
      </TouchableOpacity>
    </View>
  );
}
