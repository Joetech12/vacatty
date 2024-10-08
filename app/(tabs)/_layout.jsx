import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors?.primary,
      }}
    >
      <Tabs.Screen
        name='mytrip'
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='location-sharp' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='discover'
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='globe-sharp' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='people-circle' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
