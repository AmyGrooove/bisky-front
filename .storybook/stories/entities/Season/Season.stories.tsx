import { Meta, StoryObj } from "@storybook/react"

import { Season } from "../ui/Season"

const meta: Meta<typeof Season> = {
  title: "entities/Anime/Season",
  component: Season,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Season>

export const Default: Story = {
  args: {
    anime: {
      _id: "65f0b12653206e63e8059e6c",
      labels: {
        en: "Boku no Kokoro no Yabai Yatsu Season 2",
        ru: "Опасность в моём сердце 2",
        synonyms: [],
      },
      genres: [
        {
          name: { en: "Shounen", ru: "Сёнен" },
          relatedWorks: [],
          _id: "",
          description: { en: "", ru: "" },
        },
        {
          name: { en: "Comedy", ru: "Комедия" },
          relatedWorks: [],
          _id: "",
          description: { en: "", ru: "" },
        },
        {
          name: { en: "Romance", ru: "Романтика" },
          relatedWorks: [],
          _id: "",
          description: { en: "", ru: "" },
        },
        {
          name: { en: "School", ru: "Школа" },
          relatedWorks: [],
          _id: "",
          description: { en: "", ru: "" },
        },
      ],
      poster:
        "https://desu.shikimori.one/uploads/poster/animes/55690/49d51b1c556632d0214a49831575b5e0.jpeg",
      score: { averageScore: 0, count: 0 },
      screenshots: [
        "https://desu.shikimori.one/system/screenshots/original/becc5df7952dc5fa3cb54a496c27ee921fe1bdb9.jpg?1704562451",
        "https://desu.shikimori.one/system/screenshots/original/7c5fec7d2b1f0f89dbd3fa94337922bd324b0614.jpg?1704562452",
        "https://desu.shikimori.one/system/screenshots/original/7673de9fef685e9bc89258ebf60bac975d77b31b.jpg?1704562453",
        "https://desu.shikimori.one/system/screenshots/original/47486c88704a31b7500c5c4b663eaddae5df3df3.jpg?1704562454",
        "https://desu.shikimori.one/system/screenshots/original/933f48f49b04f36975ca65adadbc0c8cd700724c.jpg?1704562457",
      ],
    },
  },
}
