import React from "react";
import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";

const TabsLaout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" />
      </Tabs>
    </>
  );
};

export default TabsLaout;
