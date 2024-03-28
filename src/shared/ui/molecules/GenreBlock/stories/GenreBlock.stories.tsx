import { GenreBlock } from "../ui/GenreBlock"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof GenreBlock> = {
  title: "molecules/GenreBlock",
  component: GenreBlock,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof GenreBlock>

export const Default: Story = {
  args: {
    href: "#",
    posters: [
      "https://desu.shikimori.one/uploads/poster/animes/9253/475db7c6df0f11d567138322aebf411b.jpeg",
      "https://desu.shikimori.one/uploads/poster/animes/35849/bf85c0be813f3403855968b197c449ff.jpeg",
      "https://desu.shikimori.one/uploads/poster/animes/5680/dbea6bd3879512c3847373021f6e2940.jpeg",
      "https://desu.shikimori.one/uploads/poster/animes/1293/a142337b6bb898a0dfcef86b8379fd2b.jpeg",
    ],
    title: "Исекай",
    description:
      "Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме Аниме ",
  },
}
