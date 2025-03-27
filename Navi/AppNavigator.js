import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen"; // Ajustado o caminho
import Preferences from "../screens/Preferences"; // Ajustado o caminho

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Preferences" component={Preferences} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
