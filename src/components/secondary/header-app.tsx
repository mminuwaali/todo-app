import React from "react";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";

export default function Header({ title, showBackButton = false }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-white shadow-sm">
      {showBackButton && (
        <TouchableOpacity onPress={router.back} className="p-2">
          <MaterialIcons name="arrow-back" size={20} color="#4f46e5" />
        </TouchableOpacity>
      )}
      <Text className="flex-1 text-xl font-bold text-center text-slate-800">
        {title}
      </Text>
      {showBackButton ? <View className="w-10" /> : null}
    </View>
  );
}
