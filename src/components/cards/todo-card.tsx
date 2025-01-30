import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function TodoCard(props: TodoCardPropType) {
  const { id, title, description, completed, onToggleComplete, onDelete } =
    props;

  return (
    <View className="flex-row items-center justify-between p-4 mb-2 bg-white rounded-lg shadow border-x-2 border-x-gray-500">
      <View>
        <Text className="text-lg font-bold text-slate-800">{title}</Text>
        <Text
          className={`text-sm ${completed ? "text-green-500" : "text-red-500"}`}
        >
          {completed ? "Completed" : "In Progress"}
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity onPress={() => onToggleComplete(id)}>
          <Ionicons
            name={completed ? "checkmark-done-circle" : "ellipse-outline"}
            color={completed ? "green" : "gray"}
            size={16}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDelete(id)}>
          <Ionicons name="trash" size={16} color="red" />
        </TouchableOpacity>

        <Link href={`/${id}` as never} asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={16} color="blue" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
