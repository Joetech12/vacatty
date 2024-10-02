import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/images/login.jpg")}
        className='h-[55vh] w-full'
        // style={{
        //   height: 500,
        //   width: "100%",
        // }}
      />
      <View className=' bg-white mt-[-20px] h-[100%] rounded-tl-[30px] rounded-tr-[30px] p-[25px]'>
        <Text
          className='text-[30px] mt-[0px] text-center'
          style={{ fontFamily: "outfitBold" }}
        >
          Vacatty
        </Text>
        <Text
          className='text-[17px] mt-[20px] text-center text-black/80'
          style={{ fontFamily: "outfit" }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("auth/sign-in")}
          className='p-[15px] bg-black rounded-[99px] mt-[15%]'
        >
          <Text
            style={{ fontFamily: "outfit" }}
            className='text-white text-[17px] text-center'
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
