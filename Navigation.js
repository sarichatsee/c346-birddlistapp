import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home.js";
import AddBird from "./addBird.js";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Bird List" }} />
        <Stack.Screen name="AddBird" component={AddBird} options={{ title: "Add New Bird" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
