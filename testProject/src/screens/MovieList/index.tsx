import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  Alert,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { MovieSearch } from "../../models/movie.model";
import { Loading } from "../../components/Loading";
import { useMovieQuery } from "../../data/movie.remote";
import { MovieItem } from "./MovieItem";

export default function MovieList() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("Star");

  const { data: movies, isFetching } = useMovieQuery({ search: searchText });

  const handlePress = (movie: MovieSearch) => {
    // Navigate to details page with the selected movie
    // @ts-ignore
    navigation.navigate("MovieDetail", { movie });
  };

  if (isFetching) {
    return <Loading text="Fetching Movies..." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>Film Searcher</Text>
      <FlatList
        style={styles.scrollView}
        data={movies?.Search || []}
        extraData={isFetching}
        renderItem={({ item: movie }) => (
          <MovieItem movie={movie} onPress={handlePress} />
        )}
      />
    </SafeAreaView>
  );
}
