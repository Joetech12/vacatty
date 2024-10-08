import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { CreateTripContext } from "@/context/CreateTripContext";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "@/configs/firebase";
import { Colors } from "../../constants/Colors";
import UserTripList from "../../components/MyTrips/UserTripList";
import { useRouter } from "expo-router";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  const [loading, setLoading] = useState(null);

  const router = useRouter();

  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  const getMyTrips = async () => {
    setLoading("loading");
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", loggedUser?.email)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
      // setTripData(doc.data());
      // console.log(doc.id, " => ", doc.data())
    });
    setLoading("success");
  };

  useEffect(() => {
    if (loggedUser) {
      getMyTrips();
    }
  }, [loggedUser]);

  // console.log({ userTrips });

  return (
    <ScrollView className='p-[25px] pt-[55px] bg-white h-[100%]'>
      <View className='flex-row items-center justify-between mb-[10px]'>
        <Text className='text-[25px]' style={{ fontFamily: "outfitBold" }}>
          MyTrips
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name='add-circle' size={40} color='black' />
        </TouchableOpacity>
      </View>

      {loading === "loading" && (
        <View className='mt-[50px]'>
          <ActivityIndicator color={Colors?.primary} size='large' />
        </View>
      )}

      {loading != "loading" && userTrips?.length === 0 && <StartNewTripCard />}
      {loading != "loading" && userTrips?.length > 0 && (
        <UserTripList userTrips={userTrips} />
      )}
    </ScrollView>
  );
}
