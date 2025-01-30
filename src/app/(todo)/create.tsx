import React from "react";
import { router } from "expo-router";
import { useTodoStore } from "@/src/store/todoStore";
import Header from "@/src/components/secondary/header-app";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function NewTodoScreen() {
  const { addTodo } = useTodoStore();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSave = () => {
    if (title.trim() && description.trim()) {
      addTodo({
        title,
        description,
        completed: false,
        id: Date.now().toString(),
      });
      router.back();
    }
  };

  return (
    <View className="flex-1 gap-4 p-4 bg-slate-100">
      <Header title="New Todo" showBackButton />

      <Text className="mb-6 text-2xl font-bold text-slate-800">New Todo</Text>
      <View className="p-4 bg-white rounded-lg shadow-sm">
        <TextInput
          value={title}
          placeholder="Title"
          onChangeText={setTitle}
          placeholderTextColor="#94a3b8"
          className="p-2 mb-4 border-b text-slate-800 border-slate-200"
        />
        <TextInput
          multiline
          value={description}
          placeholder="Description"
          placeholderTextColor="#94a3b8"
          onChangeText={setDescription}
          className="p-2 text-slate-800"
        />
      </View>
      <TouchableOpacity
        onPress={handleSave}
        className="self-center px-6 py-3 mt-6 bg-indigo-500 rounded-full"
      >
        <Text className="font-semibold text-white">Save</Text>
      </TouchableOpacity>
    </View>
  );
}
