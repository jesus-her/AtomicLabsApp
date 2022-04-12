import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CustomStackNavigator from "./src/navigation/CustomStackNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <CustomStackNavigator />
      </NavigationContainer>
    </>
  );
}
