import { Text, View } from "react-native";
import LoginScreen from "../components/Login.jsx";

export default function Index() {
  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className='flex-1 bg-gray-200 '
    >
      <LoginScreen />
    </View>
  );
}
