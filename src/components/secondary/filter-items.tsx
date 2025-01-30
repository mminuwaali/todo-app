import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function FilterButtons(props: FilterButtonsProps) {
  return (
    <View className="flex-row justify-around mb-4">
      <TouchableOpacity
        onPress={() => props.onFilterChange("all")}
        className={`px-4 py-2 rounded-full ${
          props.filter === "all" ? "bg-indigo-500" : "bg-slate-200"
        }`}
      >
        <Text
          className={`text-sm font-semibold ${
            props.filter === "all" ? "text-white" : "text-slate-800"
          }`}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onFilterChange("completed")}
        className={`px-4 py-2 rounded-full ${
          props.filter === "completed" ? "bg-indigo-500" : "bg-slate-200"
        }`}
      >
        <Text
          className={`text-sm font-semibold ${
            props.filter === "completed" ? "text-white" : "text-slate-800"
          }`}
        >
          Completed
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onFilterChange("incomplete")}
        className={`px-4 py-2 rounded-full ${
          props.filter === "incomplete" ? "bg-indigo-500" : "bg-slate-200"
        }`}
      >
        <Text
          className={`text-sm font-semibold ${
            props.filter === "incomplete" ? "text-white" : "text-slate-800"
          }`}
        >
          Incomplete
        </Text>
      </TouchableOpacity>
    </View>
  );
}
