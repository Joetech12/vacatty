import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "@/context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";
import { Link, useNavigation, useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "@/configs/firebase";

export default function GenerateTrip() {
  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  const [loading, setLoading] = useState(null);

  const router = useRouter();

  const generateAiTrip = async () => {
    setLoading("loading");

    try {
      const FINAL_PROMPT = AI_PROMPT?.replace(
        "{location}",
        tripData.locationInfo.name
      )
        .replace("{totalDays}", tripData.totalDays)
        .replace("{totalNight}", tripData.totalDays - 1)
        .replace("{traveler}", tripData.traveler?.title)
        .replace("{budget}", tripData.budget)
        .replace("{totalDays}", tripData.totalDays)
        .replace("{totalNight}", tripData.totalDays - 1);

      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log({ result: result.response.text() });

      const tripResponse = JSON.parse(result.response.text());
      // setLoading("success");

      const docId = Date.now()?.toString();

      if (tripResponse) {
        await setDoc(doc(db, "UserTrips", docId), {
          userEmail: loggedUser?.email,
          tripPlan: tripResponse,
          tripData: JSON.stringify(tripData),
          docId,
        });

        // if (finalResult) {
        // }
        setLoading("success");
        router.push("/(tabs)/mytrip");
      }
    } catch (error) {
      setLoading("error");
      console.log({ error });
    } finally {
      // console.log({ loggedUser });
    }
  };

  useEffect(() => {
    if (tripData) {
      generateAiTrip();
    }
  }, [tripData]);

  console.log({ tripData });

  return (
    <View className='p-[25px] pt-[75px] h-[100%] bg-white'>
      <Text
        className='text-[25px] mt-[20px] text-center'
        style={{ fontFamily: "outfitBold" }}
      >
        Please Wait...
      </Text>
      <Text
        className='text-[20px] mt-[20px] text-center'
        style={{ fontFamily: "outfitMedium" }}
      >
        Generating your dream trip
      </Text>

      <Image
        className='mt-[50px] w-[100%] h-[200px]'
        style={{ objectFit: "contain" }}
        source={require("../../assets/images/plane.gif")}
      />

      <Text
        className='text-[18px] mt-[20px] text-primary/50 text-center'
        style={{ fontFamily: "outfit" }}
      >
        Do not go back
      </Text>
    </View>
  );
}
