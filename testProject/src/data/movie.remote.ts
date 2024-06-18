import { useQuery } from "@tanstack/react-query";
import { getMovieDetail, getMovies } from "./endpoint";

interface IMovieQuery {
  search: string;
}

interface IMovieDetailQuery {
  movieId: string;
}

export const useMovieQuery = ({ search }: IMovieQuery) => {
  return useQuery({
    queryKey: ["movies", search],
    queryFn: async ({ queryKey }) => {
      const response = await getMovies(queryKey[1]);

      return response;
    },
  });
};

export const useMovieDetailQuery = ({ movieId }: IMovieDetailQuery) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: async ({ queryKey }) => {
      const response = await getMovieDetail(queryKey[1]);
      return response;
    },
  });
};
