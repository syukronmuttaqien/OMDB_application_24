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
} from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieSearch } from "../../models/movie.model";
import { useMovieDetailQuery } from "../../data/movie.remote";
import { Loading } from "../../components/Loading";

export default function MovieDetail() {
  const routes = useRoute() as any;
  const movie = routes.params.movie as MovieSearch;

  const { data: detail, isFetching } = useMovieDetailQuery({
    movieId: movie.imdbID,
  });

  if (isFetching) {
    return <Loading text="Fetching Detail..." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`IMDB ID: ${detail?.imdbID}`}</Text>
      <Text>{`Title: ${detail?.Title}`}</Text>
      <Text>{`Genre: ${detail?.Genre}`}</Text>
      <Text>{`Director: ${detail?.Director}`}</Text>
      <Text>{`Meta Score: ${detail?.Metascore}`}</Text>
    </SafeAreaView>
  );
}
