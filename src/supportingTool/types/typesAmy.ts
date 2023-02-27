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
