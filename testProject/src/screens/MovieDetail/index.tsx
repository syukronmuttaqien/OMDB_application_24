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

export default function MovieDetail() {
  const routes = useRoute() as any;
  const movieId = routes.params.movieId;

  return (
    <View style={styles.container}>
      <Text>{`Movie ID: ${movieId}`}</Text>
    </View>
  );
}
