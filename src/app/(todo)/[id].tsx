import React from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTodoStore } from "@/src/store/todoStore";
import Animated, { FadeIn } from "react-native-reanimated";
import Header from "@/src/components/secondary/header-app";

export default function DetailScreen() {
  const { todos } = useTodoStore();
  const { id } = useLocalSearchParams();
  const todo = todos.find((t) => t.id === id);

  return (
    <View className="flex-1 gap-4 p-4 bg-slate-100">
      <Header title="Todo Details" showBackButton />

      <Animated.View
        entering={FadeIn.duration(500)}
        className="p-6 bg-white rounded-lg shadow-sm"
      >
        <Text className="mb-4 text-2xl font-bold text-slate-800">
          {todo?.title}
        </Text>
        <Text className="text-slate-600">{todo?.description}</Text>
        <Text
          className={`text-sm mt-4 ${
            todo?.completed ? "text-green-500" : "text-red-500"
          }`}
        >
          {todo?.completed ? "Completed" : "In Progress"}
        </Text>
      </Animated.View>
    </View>
  );
}
