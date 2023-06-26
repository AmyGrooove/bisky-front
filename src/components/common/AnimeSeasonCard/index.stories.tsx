import AnimeSeasonCard from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AnimeSeasonCard> = {
  title: "Components/Common/AnimeSeasonCard",
  component: AnimeSeasonCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AnimeSeasonCard>

export const AnimeSeasonCardDefault: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      poster: "51535",
      scores: 0,
      anotherScores: [9.05],
      screenshots: [
        "57e7ed3ab8f60b2c5562827a1453aa8ef4ad7ba2",
        "5b93b65897e1efb63fc6e3ca813d4055e9fe3659",
        "1e6818d5fbebe37fc224cfec276e0a82258f4a06",
        "0447ea96f098953e30cbf911e82d459c92799c92",
        "9956f94eebcb179b2578a0647ae78fd410b3be3d",
        "b6482a4eab88952566ce6b20588d0c84ed88147d",
      ],
      genres: [
        {
          hentai: false,
          linkId: {
            anime: 1,
            manga: 56,
          },
          name: {
            en: "Action",
            ru: "Экшен",
          },
        },
        {
          hentai: false,
          linkId: {
            anime: 8,
            manga: 50,
          },
          name: {
            en: "Drama",
            ru: "Драма",
          },
        },
        {
          hentai: false,
          linkId: {
            anime: 27,
            manga: 47,
          },
          name: {
            en: "Shounen",
            ru: "Сёнен",
          },
        },
        {
          hentai: false,
          linkId: {
            anime: 38,
            manga: 70,
          },
          name: {
            en: "Military",
            ru: "Военное",
          },
        },
      ],
    },
  },
}
