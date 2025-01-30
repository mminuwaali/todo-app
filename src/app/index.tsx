import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, Image } from "react-native";
import Animated, {
  FadeIn,
  BounceIn,
  SlideInDown,
} from "react-native-reanimated";

export default function WelcomeScreen() {
  return (
    <LinearGradient
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      colors={["#4f46e5", "#818cf8"]}
      className="items-center justify-center flex-1"
    >
      <Animated.View entering={SlideInDown.duration(1000)}>
        <Image
          className="w-48 h-48 mb-8"
          source={require("../../public/logo.png")}
        />
      </Animated.View>

      <Animated.Text
        entering={FadeIn.duration(1000)}
        className="mb-4 text-4xl font-bold text-center text-white"
      >
        Welcome to Todo App
      </Animated.Text>

      <Animated.Text
        entering={FadeIn.delay(500).duration(1000)}
        className="mb-8 text-lg text-center text-slate-200"
      >
        Stay organized and productive with your daily tasks.
      </Animated.Text>

      <Animated.View entering={BounceIn.delay(1000).duration(1000)}>
        <Link href="/home" asChild>
          <TouchableOpacity className="px-10 py-3 bg-white rounded-full shadow-lg">
            <Text className="font-semibold text-indigo-500">Get Started</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </LinearGradient>
  );
}
