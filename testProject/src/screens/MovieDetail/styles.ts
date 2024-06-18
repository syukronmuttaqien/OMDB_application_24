import { ScrollView, StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: "100%",
  },
  scrollView: {
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
  },
  imageContainer: {
    width: "100%",
  },
  poster: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  genreContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  genre: {
    marginRight: 8,
  },
  detailPadding: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
  },
});
