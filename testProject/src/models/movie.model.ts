export interface MovieResponseDto {
  Search: MovieSearch[];
  totalResults: string;
  Response: string;
}

export interface MovieSearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
