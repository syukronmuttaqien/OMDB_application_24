import { useMutation, useQuery } from "@tanstack/react-query";
import { getMovieDetail, getMovies } from "./endpoint";

interface IMovieQuery {
  search: string;
  page: number;
}

interface IMovieDetailQuery {
  movieId: string;
}

export const useMovieQuery = () => {
  return useMutation({
    mutationFn: async ({ search, page }: IMovieQuery) => {
      const response = await getMovies(search, page);

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
