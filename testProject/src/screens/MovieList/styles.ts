import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    width: "100%",
    height: 200,
  },
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