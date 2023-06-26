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
      anotherScores: [9.05],
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
  },
}

export const AnimePosterCardAnons: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
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
  },
}

export const AnimePosterCardReleased: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
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
  },
}

export const AnimePosterCardNewSeries: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "newSeries",
    watchedCount: 0,
  },
}

export const AnimePosterCardWatching: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "watching",
    watchedCount: 2,
  },
}

export const AnimePosterCardWatchingPlus: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "watching",
    watchedCount: 0,
  },
}

export const AnimePosterCardNoHover: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "watching",
    watchedCount: 0,
    hover: false,
  },
}

export const AnimePosterCardNoBadges: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "watching",
    watchedCount: 0,
    badges: false,
  },
}

export const AnimePosterCardNoTitle: Story = {
  args: {
    anime: {
      id: 51535,
      labels: ["Атака титанов: Финал — Заключительная глава"],
      scores: 9.15,
      anotherScores: [9.05],
      status: "ongoing",
      episodes: {
        aired: 2,
        count: 123,
        duration: 213,
        nextEpisodeAt: null,
      },
    },
    posterType: "watching",
    watchedCount: 0,
    title: false,
  },
}
