import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../configs/firebase";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const generalStyle = {
    fontFamily: "outfit",
  };

  const onSignIn = () => {
    console.log({ email, password });
    if (!email || !password) {
      ToastAndroid.show("Please enter email and password", ToastAndroid.BOTTOM);
      return;
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log({ user });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/invalid-credential") {
            ToastAndroid.show("Invalid credentials", ToastAndroid.BOTTOM);
          } else {
            ToastAndroid.show(`${errorCode}`, ToastAndroid.BOTTOM);
          }
        });
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View className='p-[25px] pt-[40px] bg-white h-[100%]'>
      <TouchableOpacity
        onPress={() => router.back()}
        className='w-[50px] h-[50px] border border-black/0 rounded-full flex-row'
      >
        <FontAwesome5 name='arrow-left' color='black' size={20} />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "outfitBold" }}
        className='mt-[5%] text-[30px]'
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          ...generalStyle,
        }}
        className='text-[30px] text-black/80 mt-[3%]'
      >
        Welcome Back
      </Text>
      <Text
        style={{ fontFamily: "outfit" }}
        className='text-[24px] text-black/80 mt-[0px]'
      >
        You've been missed!
      </Text>

      {/* Email */}
      <View className='mt-[8%]'>
        <Text
          style={{
            ...generalStyle,
          }}
          className='mb-[1%]'
        >
          Email
        </Text>
        <TextInput
          placeholder='Enter Email'
          onChangeText={(value) => setEmail(value)}
          className='p-[15px] rounded-[15px] border-[1.5px] border-black/80'
        />
      </View>
      {/* Password */}
      <View className='mt-[5%]'>
        <Text
          style={{
            ...generalStyle,
          }}
          className='mb-[1%]'
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Enter Password'
          onChangeText={(value) => setPassword(value)}
          className='p-[15px] rounded-[15px] border-[1.5px] border-black/80'
        />
      </View>

      {/* sign-in */}
      <TouchableOpacity
        onPress={onSignIn}
        className='p-[20px] bg-black rounded-[15px] mt-[15%]'
      >
        <Text className='text-white text-center'>Sign In</Text>
      </TouchableOpacity>
      {/* sign-in */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        className='p-[20px] bg-white border-[1.5px] border-black rounded-[15px] mt-[5%]'
      >
        <Text className='text-black text-center'>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
