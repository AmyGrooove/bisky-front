export interface ISeasonalAnime {
  shiki_id: number;
  labels: string[];
  poster: string | null;
  scores: number[];
  genres: IGenres[];
  screenshots: string[];
}

export interface IAllGenres {
  genre_id: number;
  name: {
    en: string;
    ru: string;
  };
}

export interface IPosterAnime {
  shiki_id: number;
  labels: string[];
  poster: string | null;
  scores: number[];
  kind: 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music';
  status: 'anons' | 'ongoing' | 'released';
  aired_on: Date;
}

export interface IAnimeInfo {
  shiki_id: number;
  labels: string[];
  poster: string | null;
  kind: 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music';
  scores: number[];
  status: 'anons' | 'ongoing' | 'released';
  episodes: {
    count: number | null;
    aired: number | null;
    duration: number;
    next_episode_at: Date | null;
  };
  dates: {
    aired_on: Date | null;
    released_on: Date | null;
  };
  rating: 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
  description: string | null;
  screenshots: string[];
  videos: string[];
  genres: IGenres[];
  studios: IStudios[];
  relations: {
    franchise: string | null;
    animes: { link: IAnimeInfo; relation: { en: string; ru: string } }[];
  };
}

export interface IPlatform {
  platform_id: number;
  name: string;
  icon: string;
  url: string;
}

export interface IGenres {
  genre_id: number;
  name: {
    en: string;
    ru: string;
  };
}

export interface IStudios {
  studio_id: number;
  name: string;
  img: string | null;
}

///
export interface UserMainAnimes {
  posterAnime: IPosterAnime[];
  status: string;
}
