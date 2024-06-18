import { StyleSheet } from "react-native";
import Colors from "../../../theme/colors";

export const styles = StyleSheet.create({
  movieContainer: {
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
