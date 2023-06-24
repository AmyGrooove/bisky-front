import AnimePosterCard from "../AnimePosterCard"

import Carousel from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Carousel> = {
  title: "Components/Common/Carousel",
  component: Carousel,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Carousel>

export const CarouselDefault: Story = {
  args: {
    variant: "AnimePosterCard",
  },
}

export const CarouselWithTitle: Story = {
  args: {
    variant: "AnimePosterCard",
    withTitle: true,
    title: "Рейтинг",
  },
}

export const CarouselMultipleRows: Story = {
  args: {
    variant: "AnimePosterCard",
    rows: 2,
    withTitle: true,
    title: "Рейтинг",
  },
}

export const CarouselGenreCard: Story = {
  args: {
    variant: "GenreCard",
    withTitle: true,
    title: "Жанры",
  },
}

export const CarouselScreenshots: Story = {
  args: {
    variant: "Screenshots",
    withTitle: true,
    title: "Кадры",
  },
}
