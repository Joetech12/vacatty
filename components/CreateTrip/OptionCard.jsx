import { View, Text } from "react-native";
import React from "react";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      className={`p-[25px] flex-row justify-between bg-black/10 border-[0px] rounded-[15px] ${
        selectedOption?.id === option?.id ? "border-[2px]" : ""
      }`}
    >
      <View>
        <Text className='text-[20px] ' style={{ fontFamily: "outfitBold" }}>
          {option?.title}
        </Text>
        <Text
          className='text-[17px] text-black/50'
          style={{ fontFamily: "outfit" }}
        >
          {option?.desc}
        </Text>
      </View>

      <Text className='text-[35px]'>{option?.icon}</Text>
    </View>
  );
}
