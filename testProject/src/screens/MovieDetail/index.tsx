import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieSearch } from "../../models/movie.model";
import { useMovieDetailQuery } from "../../data/movie.remote";
import { Loading } from "../../components/Loading";
import FastImage from "react-native-fast-image";
import { Spacing, Text } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../theme/colors";
import { GenreItem } from "./components/GenreItem";

// If image not found, the image should load this
const placeholderUrl =
  "https://via.placeholder.com/500x300?text=Image+Not+Found";

export default function MovieDetail() {
  const routes = useRoute() as any;
  const movie = routes.params.movie as MovieSearch;

  const { data: detail, isFetching } = useMovieDetailQuery({
    movieId: movie.imdbID,
  });

  if (isFetching) {
    return <Loading text="Fetching Detail..." />;
  }

  const genres = detail?.Genre.split(", ") || [];

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.poster}
            source={{
              uri:
                detail?.Poster === "N/A" || undefined
                  ? placeholderUrl
                  : detail?.Poster,
            }}
          ></FastImage>
        </View>
        <View style={styles.detailPadding}>
          <Spacing orientation="vertical" amount={12} />
          <View style={styles.titleContainer}>
            <Text size={16} variant="bold">
              {`${detail?.Title} (${detail?.Year})`}
            </Text>
          </View>
          <Spacing orientation="vertical" amount={12} />
          <View style={styles.ratingContainer}>
            <Icon name="star" color={Colors.yellow} size={14} />
            <Spacing orientation="horizontal" amount={8} />
            <Text
              color={Colors.textGrey}
              size={14}
            >{`${detail?.imdbRating} / 10 IMDb`}</Text>
          </View>
          <Spacing orientation="vertical" amount={16} />
          <View style={styles.genreContainer}>
            {genres.map((genre, index) => (
              <View style={styles.genre} key={index}>
                <GenreItem text={genre} />
                <Spacing orientation="horizontal" amount={4} />
              </View>
            ))}
          </View>
          <Spacing orientation="vertical" amount={16} />
          <Text size={14} variant="semi-bold">
            Description
          </Text>
          <Spacing orientation="vertical" amount={4} />
          <Text>{detail?.Plot}</Text>
          <Spacing orientation="vertical" amount={16} />
          <Text size={14} variant="semi-bold">
            Director
          </Text>
          <Spacing orientation="vertical" amount={4} />
          <Text>{detail?.Director}</Text>
          <Spacing orientation="vertical" amount={16} />
          <Text size={14} variant="semi-bold">
            Actors
          </Text>
          <Spacing orientation="vertical" amount={4} />
          <Text>{detail?.Actors}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
