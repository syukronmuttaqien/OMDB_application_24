import { StyleSheet } from "react-native";
import Colors from "../../../../theme/colors";

export const styles = StyleSheet.create({
  movieContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 12,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  moviteTitleContainer: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  poster: {
    borderRadius: 10,
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
