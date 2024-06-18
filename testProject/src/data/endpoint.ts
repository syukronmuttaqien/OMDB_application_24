import ApiClient, { API_URL } from "../config/api";
import {
  MovieDetailResponseDto,
  MovieResponseDto,
} from "../models/movie.model";

export const getMovies = async (
  search: string,
  page: number = 1
): Promise<MovieResponseDto> => {
  const response = await ApiClient.get(`${API_URL}&s=${search}&page=${page}`);
  return response.data;
};

export const getMovieDetail = async (
  movieId: string
): Promise<MovieDetailResponseDto> => {
  const response = await ApiClient.get(`${API_URL}&i=${movieId}`);
  return response.data;
};
