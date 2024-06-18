import ApiClient, { API_URL } from "../config/api";
import {
  MovieDetailResponseDto,
  MovieResponseDto,
} from "../models/movie.model";

export const getMovies = async (search: string): Promise<MovieResponseDto> => {
  const response = await ApiClient.get(`${API_URL}&s=${search}`);
  return response.data;
};

export const getMovieDetail = async (
  movieId: string
): Promise<MovieDetailResponseDto> => {
  const response = await ApiClient.get(`${API_URL}&i=${movieId}`);
  return response.data;
};
