import { Text, TouchableOpacity, View } from "react-native";
import { MovieSearch } from "../../../models/movie.model";
import { styles } from "./styles";

interface Props {
  movie: MovieSearch;
  onPress: (movie: MovieSearch) => void;
}

export const MovieItem = ({ movie, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(movie)}>
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>{movie.Title}</Text>
      </View>
    </TouchableOpacity>
  );
};
