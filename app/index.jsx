import { Text, View } from "react-native";
import LoginScreen from "../components/Login.jsx";
import { auth } from "../configs/firebase.js";
import { Redirect } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useContext } from "react";

export default function Index() {
  const user = auth.currentUser;

  const { loggedUser, setLoggedUser, tripData, setTripData } =
    useContext(CreateTripContext);

  // console.log({ user, loggedUser });

  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className='flex-1 bg-gray-200 '
    >
      {loggedUser ? <Redirect href={"/mytrip"} /> : <LoginScreen />}
    </View>
  );
}
