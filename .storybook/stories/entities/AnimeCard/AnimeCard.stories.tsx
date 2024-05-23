import { Meta, StoryObj } from "@storybook/react"

import { AnimeCard } from "../ui/AnimeCard"

const meta: Meta<typeof AnimeCard> = {
  title: "entities/Anime/AnimeCard",
  component: AnimeCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AnimeCard>

export const Released: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e50",
      labels: {
        en: "Fullmetal Alchemist: Brotherhood",
        ru: "Стальной алхимик: Братство",
        synonyms: [],
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: { averageScore: 4, count: 0 },
      episodes: {
        airedCount: 63,
        count: null,
        nextEpisodeAiredDate: null,
        lastEpisodeAiredDate: null,
        duration: 0,
      },
      status: "released",
      userData: {
        animeStatus: null,
        score: null,
        watchedSeries: 0,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
        watchingCount: 0,
        completedCount: 0,
        droppedCount: 0,
      },
    },
  },
}

export const Ongoing: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e50",
      labels: {
        en: "Fullmetal Alchemist: Brotherhood",
        ru: "Стальной алхимик: Братство",
        synonyms: [],
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: { averageScore: 4, count: 0 },
      episodes: {
        airedCount: 63,
        count: null,
        nextEpisodeAiredDate: null,
        lastEpisodeAiredDate: null,
        duration: 0,
      },
      status: "ongoing",
      userData: {
        animeStatus: null,
        score: null,
        watchedSeries: 0,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
        watchingCount: 0,
        completedCount: 0,
        droppedCount: 0,
      },
    },
  },
}

export const Anons: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e50",
      labels: {
        en: "Fullmetal Alchemist: Brotherhood",
        ru: "Стальной алхимик: Братство",
        synonyms: [],
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: { averageScore: 4, count: 0 },
      episodes: {
        airedCount: 63,
        count: null,
        nextEpisodeAiredDate: null,
        lastEpisodeAiredDate: null,
        duration: 0,
      },
      status: "anons",
      userData: {
        animeStatus: null,
        score: null,
        watchedSeries: 0,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
        watchingCount: 0,
        completedCount: 0,
        droppedCount: 0,
      },
    },
  },
}

export const UserLogged: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e50",
      labels: {
        en: "Fullmetal Alchemist: Brotherhood",
        ru: "Стальной алхимик: Братство",
        synonyms: [],
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: { averageScore: 4, count: 0 },
      episodes: {
        airedCount: 63,
        count: null,
        nextEpisodeAiredDate: null,
        lastEpisodeAiredDate: null,
        duration: 0,
      },
      status: "released",
      userData: {
        animeStatus: null,
        score: null,
        watchedSeries: 0,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
        watchingCount: 0,
        completedCount: 0,
        droppedCount: 0,
      },
    },
    onClick: () => console.log("added"),
  },
}

export const UserData: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e50",
      labels: {
        en: "Fullmetal Alchemist: Brotherhood",
        ru: "Стальной алхимик: Братство",
        synonyms: [],
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: { averageScore: 4, count: 0 },
      episodes: {
        airedCount: 63,
        count: null,
        nextEpisodeAiredDate: null,
        lastEpisodeAiredDate: null,
        duration: 0,
      },
      status: "released",
      userData: {
        animeStatus: "added",
        score: 3,
        watchedSeries: 0,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
        watchingCount: 0,
        completedCount: 0,
        droppedCount: 0,
      },
    },
    onClick: () => console.log("added"),
  },
}
