import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "Screens/Home";
import ShowMoodScreen from "Screens/ShowMood";
import CreateMoodScreen from "Screens/CreateMood";
import WhyIsThatScreen from "Screens/WhyIsThat";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateMood" component={CreateMoodScreen} />
        <Stack.Screen name="WhyIsThat" component={WhyIsThatScreen} />
        <Stack.Screen name="ShowMood" component={ShowMoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
