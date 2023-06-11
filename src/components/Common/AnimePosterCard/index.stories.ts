import AnimePosterCard from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AnimePosterCard> = {
  title: "Common/AnimePosterCard",
  component: AnimePosterCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AnimePosterCard>

export const AnimePosterCardOngoing: Story = {
  args: {
    anime: {
      shiki_id: 51535,
      labels: "Атака титанов: Финал — Заключительная глава",
      scores: 9.15,
      status: "ongoing",
      episodes: {
        count: 2,
        aired: 1,
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
      shiki_id: 51535,
      labels: "Атака титанов: Финал — Заключительная глава",
      scores: 9.15,
      status: "anons",
      episodes: {
        count: 2,
        aired: 1,
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
      shiki_id: 51535,
      labels: "Атака титанов: Финал — Заключительная глава",
      scores: 9.15,
      status: "released",
      episodes: {
        count: 2,
        aired: 1,
      },
    },
    posterType: "normal",
    watchedCount: 0,
    statusWatch: "added",
    className: "",
  },
}
