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
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: {
        averageScore: 4,
      },
      episodes: {
        airedCount: 63,
      },
      status: "released",
      userData: {
        animeStatus: null,
        score: null,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
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
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: {
        averageScore: 4,
      },
      episodes: {
        airedCount: 63,
      },
      status: "ongoing",
      userData: {
        animeStatus: null,
        score: null,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
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
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: {
        averageScore: 4,
      },
      episodes: {
        airedCount: 63,
      },
      status: "anons",
      userData: {
        animeStatus: null,
        score: null,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
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
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: {
        averageScore: 4,
      },
      episodes: {
        airedCount: 63,
      },
      status: "released",
      userData: {
        animeStatus: null,
        score: null,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
      },
    },
    onClick: () => console.log("added"),
    isUserLogged: true,
  },
}

export const UserData: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e50",
      labels: {
        en: "Fullmetal Alchemist: Brotherhood",
        ru: "Стальной алхимик: Братство",
      },
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/5114/40c4cba552dc60ebf02f8fc373b9a503.jpeg",
      score: {
        averageScore: 4,
      },
      episodes: {
        airedCount: 63,
      },
      status: "released",
      userData: {
        animeStatus: "added",
        score: 3,
      },
      usersList: {
        generalCount: 3,
        addedCount: 3,
      },
    },
    onClick: () => console.log("added"),
    isUserLogged: true,
  },
}
