export interface SeasonalAnime {
  shiki_id: number;
  label: RusEngLabels;
  image: string | null;
  score: number;
  genres: Genres[];
  screenshots: string[];
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

export interface AnimeInfo {
  shiki_id: number;
  label: RusEngLabels;
  all_labels: string[];
  image: string | null;
  url: string;
  kind: string;
  score: number;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string | null;
  rating: string;
  duration: number;
  description: string | null;
  franchise: string | null;
  next_episode_at: string | null;
  genres: Genres[];
  studios: ShortStudio[];
  videos: string[];
  screenshots: string[];
  relations: Relation[];
}

export interface ShortStudio {
  studio_id: number;
  name: string;
  image: string | null;
}

export interface Relation {
  shiki_id: number;
  relation: RusEngLabels;
  label: RusEngLabels;
  image: string;
}
