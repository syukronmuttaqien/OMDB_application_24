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
import { ApiConfig } from "../../config/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MovieSearch } from "../../models/movie.model";

export default function MovieList() {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${ApiConfig.BASE_URL}&s=star`) // Replace 'your_api_key' with the actual key from OMDb API
      .then((response) => {
        console.log("Response: ", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data: ", data);
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  }, []);

  const handlePress = (movie: MovieSearch) => {
    // Navigate to details page with the selected movie
    navigation.navigate("MovieDetail", { movieId: movie.imdbID });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Film Searcher</Text>
      <ScrollView horizontal style={styles.scrollView}>
        {movies.map((movie: MovieSearch, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(movie)}>
            <View style={styles.movieContainer}>
              <Text style={styles.movieTitle}>{movie.Title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
}
