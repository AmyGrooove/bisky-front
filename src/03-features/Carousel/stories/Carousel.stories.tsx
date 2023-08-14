import { AnimePosterCard } from "@/04-widgets/AnimePosterCard"

import { Carousel } from "../ui/Carousel"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Carousel> = {
  title: "Components/Features/Carousel",
  component: Carousel,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Carousel>

export const DefaultCarousel: Story = {
  args: {
    spaceBetween: 24,
    slides: new Array(20).fill(0).map((el, index) => (
      <AnimePosterCard
        key={index}
        anime={{
          id: 51535,
          labels: [index + "Атака титанов: Финал — Заключительная глава"],
          scores: 9.15,
          anotherScores: [9.05],
          status: "ongoing",
          episodes: {
            aired: 2,
            count: 123,
            duration: 213,
            nextEpisodeAt: null,
          },
        }}
        posterType="normal"
        watchedCount={0}
      />
    )),
    keys: new Array(20).fill(0).map((el, index) => index.toString()),
  },
}

export const CarouselLabel: Story = {
  args: {
    label: "Самое популярное",
    spaceBetween: 24,
    slides: new Array(20).fill(0).map((el, index) => (
      <AnimePosterCard
        key={index}
        anime={{
          id: 51535,
          labels: [index + "Атака титанов: Финал — Заключительная глава"],
          scores: 9.15,
          anotherScores: [9.05],
          status: "ongoing",
          episodes: {
            aired: 2,
            count: 123,
            duration: 213,
            nextEpisodeAt: null,
          },
        }}
        posterType="normal"
        watchedCount={0}
      />
    )),
    keys: new Array(20).fill(0).map((el, index) => index.toString()),
  },
}

export const CarouselButtons: Story = {
  args: {
    labelButtons: true,
    spaceBetween: 24,
    slides: new Array(20).fill(0).map((el, index) => (
      <AnimePosterCard
        key={index}
        anime={{
          id: 51535,
          labels: [index + "Атака титанов: Финал — Заключительная глава"],
          scores: 9.15,
          anotherScores: [9.05],
          status: "ongoing",
          episodes: {
            aired: 2,
            count: 123,
            duration: 213,
            nextEpisodeAt: null,
          },
        }}
        posterType="normal"
        watchedCount={0}
      />
    )),
    keys: new Array(20).fill(0).map((el, index) => index.toString()),
  },
}

export const CarouselLabelAndButtons: Story = {
  args: {
    label: "Самое популярное",
    labelButtons: true,
    spaceBetween: 24,
    slides: new Array(20).fill(0).map((el, index) => (
      <AnimePosterCard
        key={index}
        anime={{
          id: 51535,
          labels: [index + "Атака титанов: Финал — Заключительная глава"],
          scores: 9.15,
          anotherScores: [9.05],
          status: "ongoing",
          episodes: {
            aired: 2,
            count: 123,
            duration: 213,
            nextEpisodeAt: null,
          },
        }}
        posterType="normal"
        watchedCount={0}
      />
    )),
    keys: new Array(20).fill(0).map((el, index) => index.toString()),
  },
}

export const CarouselDouble: Story = {
  args: {
    doubleRow: true,
    spaceBetween: 24,
    slides: new Array(20).fill(0).map((el, index) => (
      <AnimePosterCard
        key={index}
        anime={{
          id: 51535,
          labels: [index + "Атака титанов: Финал — Заключительная глава"],
          scores: 9.15,
          anotherScores: [9.05],
          status: "ongoing",
          episodes: {
            aired: 2,
            count: 123,
            duration: 213,
            nextEpisodeAt: null,
          },
        }}
        posterType="normal"
        watchedCount={0}
      />
    )),
    keys: new Array(20).fill(0).map((el, index) => index.toString()),
  },
}
