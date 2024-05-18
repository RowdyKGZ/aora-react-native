import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-red-600">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
