import React, { useEffect, useState } from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./src/screens/MovieList";
import MovieDetail from "./src/screens/MovieDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import { NetworkInfo } from "./src/components/NetworkInfo";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // For Listening to Network State,
    NetInfo.addEventListener((state) => {
      if (__DEV__) {
        console.log("Network State:", state);
      }
      setIsOnline(!!state.isInternetReachable);
    });
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
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{
              headerBackTitle: "Back",
              title: "Movie Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <NetworkInfo visible={!isOnline} />
    </QueryClientProvider>
  );
}
