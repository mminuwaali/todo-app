import React from "react";
import { TextInput, View } from "react-native";

export default function SearchBar(props: SearchBarProps) {
  return (
    <View className="p-2 mb-4 bg-white rounded-lg shadow-sm">
      <TextInput
        value={props.value}
        className="p-2 text-slate-800"
        placeholderTextColor="#94a3b8"
        onChangeText={props.onChangeText}
        placeholder={props.placeholder || "Search..."}
      />
    </View>
  );
}
