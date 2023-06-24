import AnimePosterCard from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AnimePosterCard> = {
  title: "Components/Common/AnimePosterCard",
  component: AnimePosterCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AnimePosterCard>

export const AnimePosterCardOngoing: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "normal",
    watchedCount: 0,
    statusWatch: "added",
    className: "",
  },
}

export const AnimePosterCardAnons: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      status: "anons",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "normal",
    watchedCount: 0,
    statusWatch: "added",
    className: "",
  },
}

export const AnimePosterCardReleased: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      status: "released",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "normal",
    watchedCount: 0,
    statusWatch: "added",
    className: "",
  },
}
