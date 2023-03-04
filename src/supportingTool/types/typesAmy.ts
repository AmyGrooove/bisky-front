export interface SeasonalAnime {
  shiki_id: number;
  label: RusEngLabels;
  image: string | null;
  score: number;
  screenshots: string[];
  genres: Genres[];
}

export interface RusEngLabels {
  en: string | null;
  ru: string | null;
}

export interface Genres {
  genre_id: number;
  name: RusEngLabels;
}

export interface FactsType {
  _id: string;
  fact: string;
}

export interface PosterAnime {
  shiki_id: number;
  label: RusEngLabels;
  image: string;
  score: number;
  kind: string;
  status: string;
  aired_on: string;
}

export interface UserMainAnimes {
  posterAnime: PosterAnime[];
  status: string;
}
