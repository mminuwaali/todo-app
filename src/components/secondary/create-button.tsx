import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { ZoomIn } from "react-native-reanimated";

export default function CreateButton(props: { onPress?: () => void }) {
  return (
    <Animated.View entering={ZoomIn.delay(500)}>
      <TouchableOpacity
        onPress={props.onPress}
        className="absolute p-4 bg-indigo-500 rounded-full shadow-lg bottom-6 right-6"
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
}
