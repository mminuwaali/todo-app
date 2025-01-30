import React from "react";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { useTodoStore } from "@/src/store/todoStore";
import TodoCard from "@/src/components/cards/todo-card";
import Header from "@/src/components/secondary/header-app";
import SearchBar from "@/src/components/secondary/search-bar";
import Animated, { SlideInDown } from "react-native-reanimated";
import FilterButtons from "@/src/components/secondary/filter-items";
import CreateButton from "@/src/components/secondary/create-button";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { todos, toggleComplete, deleteTodo } = useTodoStore();
  const [filter, setFilter] = React.useState<FilterType>("all");

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (filter === "completed") return matchesSearch && todo.completed;
    if (filter === "incomplete") return matchesSearch && !todo.completed;
    return matchesSearch;
  });

  return (
    <View className="flex-1 gap-4 p-4 bg-slate-100">
      <Header title="My Todos" />

      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search todos..."
      />

      <FilterButtons filter={filter} onFilterChange={setFilter} />

      {filteredTodos.length === 0 ? (
        <View className="items-center justify-center flex-1">
          <Text className="text-lg text-slate-500">
            No todos found. Add a new one!
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animated.View entering={SlideInDown.delay(index * 100)}>
              <TodoCard
                {...item}
                onDelete={deleteTodo}
                onToggleComplete={toggleComplete}
              />
            </Animated.View>
          )}
        />
      )}

      <CreateButton onPress={() => router.push("/create")} />
    </View>
  );
}
