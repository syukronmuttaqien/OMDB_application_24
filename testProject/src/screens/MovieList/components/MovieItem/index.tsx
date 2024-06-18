import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { MovieSearch } from "../../../../models/movie.model";
import { styles } from "./styles";
import FastImage from "react-native-fast-image";
import { Spacing, Text } from "../../../../components";

interface Props {
  movie: MovieSearch;
  onPress: (movie: MovieSearch) => void;
}

const placeholderUrl =
  "https://via.placeholder.com/150x100?text=Image+Not+Found";

const MovieItemComponent = ({ movie, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(movie)}>
      <View style={styles.movieContainer}>
        <FastImage
          style={styles.poster}
          source={{
            uri:
              movie?.Poster === "N/A" || undefined
                ? placeholderUrl
                : movie.Poster,
          }}
        />
        <Spacing orientation="horizontal" amount={8} />
        <View style={styles.moviteTitleContainer}>
          <Text size={16} variant="bold">
            {movie.Title}
          </Text>
          <Spacing orientation="vertical" amount={8} />
          <Text variant="semi-bold" size={12}>{`Year: ${movie.Year}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Use Memo for better performance on big list
export const MovieItem = memo(MovieItemComponent);
