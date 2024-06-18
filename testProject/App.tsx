import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./src/screens/MovieList";
import MovieDetail from "./src/screens/MovieDetail";

type NavigationParamList = {
  MovieList: undefined;
  MovieDetail: { movieId: string };
} & ParamListBase;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MovieList"
          component={MovieList}
        />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
