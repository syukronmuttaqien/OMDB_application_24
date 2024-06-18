import React, { useCallback, useEffect, useState } from "react";
import {
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { MovieSearch } from "../../models/movie.model";
import { Loading } from "../../components/Loading";
import { useMovieQuery } from "../../data/movie.remote";
import { MovieItem } from "./components/MovieItem";
import { InputText, Spacing } from "../../components";
import { debounce } from "lodash";
import { EmptyPlaceholder } from "./components/EmptyPlaceholder";
import { NextPageLoading } from "./components/NextPageLoading";

export default function MovieList() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<MovieSearch[]>([]);
  const [searchText, setSearchText] = useState("");
  const [totalMovies, setTotalMovies] = useState(0);
  const [isNextPage, setIsNextPage] = useState(false);
  const [page, setPage] = useState(1);

  const { mutateAsync: handleSearch, isPending } = useMovieQuery();

  const handlePress = (movie: MovieSearch) => {
    // Navigate to details page with the selected movie
    // @ts-ignore
    navigation.navigate("MovieDetail", { movie });
  };

  const handleTextChange = (value: string) => {
    setSearchText(value);
    debounceHandleSearch(value);
  };

  const handleNextPage = useCallback(
    debounce(async (text, page) => {
      const response = await handleSearch({ search: text, page });

      if (response.Response === "True") {
        const oldMovies = movies.slice();
        const newMovies = oldMovies.concat(response.Search);
        setPage(page);
        setMovies(newMovies);
        setIsNextPage(false);
        return;
      }

      setPage(page);
      setMovies([]);
      setIsNextPage(false);
    }, 1000),
    [movies, page]
  );

  // Use Debounce Function and Callback,so the API won't triggered when we typing
  const debounceHandleSearch = useCallback(
    debounce(async (text: string) => {
      const response = await handleSearch({ search: text, page: 1 });

      if (response.Response === "True") {
        setMovies(response.Search);
        setTotalMovies(Number(response.totalResults));
        setPage(1);
        return;
      }

      setMovies([]);
    }, 1000),
    []
  );

  // const placeholderVisible =
  //   searchText.trim() === "" || (movies?.Search.length || [].length) < 1;

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <StatusBar barStyle="default" />
      <InputText
        onChangeText={handleTextChange}
        value={searchText}
        defaultValue=""
      />

      <FlatList
        style={styles.scrollView}
        data={movies}
        extraData={isNextPage}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              handleSearch({ search: searchText, page: 1 });
            }}
          />
        }
        ListEmptyComponent={
          <>
            <Spacing orientation="vertical" amount={100} />
            <EmptyPlaceholder
              visible={true}
              state={searchText.trim() === "" ? "empty" : "not-found"}
            />
          </>
        }
        ListFooterComponent={isNextPage ? <NextPageLoading /> : undefined}
        renderItem={({ item: movie }) => (
          <MovieItem movie={movie} onPress={handlePress} />
        )}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (
            !isPending &&
            movies.length < totalMovies &&
            movies.length >= 10
          ) {
            setIsNextPage(true);
            handleNextPage(searchText, page + 1);
          }
        }}
      />
    </SafeAreaView>
  );
}
