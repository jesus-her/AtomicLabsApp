import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, SIZES } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import Form from "../screens/Form";
import FormSent from "../screens/FormSent";

const Stack = createStackNavigator();

export default function CustomStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{
          title: "",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="FormSent"
        component={FormSent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
