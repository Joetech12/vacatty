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
import AntDesign from "react-native-vector-icons/AntDesign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/firebase";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const generalStyle = {
    fontFamily: "outfit",
  };

  const onCreateAccount = () => {
    console.log({ email, password, fullName });
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please enter all the fields", ToastAndroid.BOTTOM);
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          ToastAndroid.show(
            `${user.email} was created successfully, please sign in`,
            ToastAndroid.BOTTOM
          );

          router.replace("auth/sign-in");

          // console.log({ user });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errorCode, errorMessage });

          ToastAndroid.show(`${errorCode}`, ToastAndroid.BOTTOM);
          // ..
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
        className='text-[30px] mt-[5%]'
        style={{ fontFamily: "outfitBold" }}
      >
        Create New Account
      </Text>

      {/* Full Name */}
      <View className='mt-[8%]'>
        <Text
          style={{
            ...generalStyle,
          }}
          className='mb-[1%]'
        >
          Full Name
        </Text>
        <TextInput
          placeholder='Enter Full Name'
          onChangeText={(value) => setFullName(value)}
          className='p-[15px] rounded-[15px] border-[1.5px] border-black/80'
        />
      </View>
      {/* Email */}
      <View className='mt-[20px]'>
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
      <View className='mt-[20px]'>
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
        onPress={onCreateAccount}
        className='p-[20px] bg-black rounded-[15px] mt-[50px]'
      >
        <Text className='text-white text-center'>Create Account</Text>
      </TouchableOpacity>
      {/* sign-in */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
        className='p-[20px] bg-white border-[1.5px] border-black rounded-[15px] mt-[20px]'
      >
        <Text className='text-black text-center'>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
