import React, { useEffect } from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./src/screens/MovieList";
import MovieDetail from "./src/screens/MovieDetail";
import {
  QueryClient,
  QueryClientProvider,
  onlineManager,
} from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    if (!onlineManager.hasListeners()) {
      onlineManager.setEventListener((setOnline) => {
        return NetInfo.addEventListener((state) => {
          setOnline(!!state.isConnected);
        });
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MovieList">
          <Stack.Screen
            options={{
              title: "Film Searcher",
            }}
            name="MovieList"
            component={MovieList}
          />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
