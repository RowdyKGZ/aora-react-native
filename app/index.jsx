import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl fonts-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to home
      </Link>
    </View>
  );
}
