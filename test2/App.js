import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ScreenOwner from "./screens/ScreenOwner";
import ScreenOwnerRegist from "./screens/ScreenOwnerRegist";
import ScreenFinder from "./screens/ScreenFinder";
import ScreenFinderRegist from "./screens/ScreenFinderRegist";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenOwner" component={ScreenOwner} />
        <Stack.Screen name="ScreenOwnerRegist" component={ScreenOwnerRegist} />
        <Stack.Screen name="ScreenFinder" component={ScreenFinder} /> 
        <Stack.Screen name="ScreenFinderRegist" component={ScreenFinderRegist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}