import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  return (
    <View className="flex-1 px-10% py-5% gap-4 bg-gray-100">
      <View className="flex-1 bg-white shadow shadow-black/5 rounded-3xl"></View>

      <View className="items-center justify-center flex-1 w-full gap-10">
        <Text className="text-3xl font-bold text-center text-slate-800">
          Stay Organized with TodoNow
        </Text>
        <Text className="leading-5 text-center text-gray-600">
          Keep track of your tasks effortlessly, manage your priorities, and
          boost productivity with our simple and intuitive to-do list app. Let's
          make every day more productive!
        </Text>

        <Link
          asChild
          replace
          href="/home"
          className="px-6 py-3 rounded-full shadow "
        >
          <TouchableOpacity className="flex-row items-center gap-10 justify-evenly bg-slate-800">
            <Text
              style={{ fontVariant: ["small-caps"] }}
              className="text-lg font-bold text-white"
            >
              get started
            </Text>

            <View className="px-4 py-1 bg-white rounded-full">
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
