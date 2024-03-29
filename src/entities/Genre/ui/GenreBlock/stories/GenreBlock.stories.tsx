import { GenreBlock } from "../ui/GenreBlock"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof GenreBlock> = {
  title: "entities/Genre/GenreBlock",
  component: GenreBlock,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof GenreBlock>

export const Default: Story = {
  args: {
    href: "#",
    genre: {
      _id: "65f0ae0553206e63e8039413",
      description: { en: null, ru: null },
      name: { en: "Kids", ru: "Детское" },
      relatedWorks: [
        {
          _id: "65f0b12653206e63e8059f8d",
          poster:
            "https://desu.shikimori.one/uploads/poster/animes/2150/6a99603870fe4b4a332b23cf0dda1d9d.jpeg",
        },
        {
          _id: "65f0b12653206e63e8059fb2",
          poster:
            "https://desu.shikimori.one/uploads/poster/animes/10534/316ed7dc7cebb03973a0d899108d9b37.jpeg",
        },
        {
          _id: "65f0b12653206e63e8059fc6",
          poster:
            "https://desu.shikimori.one/uploads/poster/animes/40853/94ec592f9b20f7ced392f26de1a09e62.jpeg",
        },
        {
          _id: "65f0b12653206e63e805a02c",
          poster:
            "https://desu.shikimori.one/uploads/poster/animes/21469/5bf43c169dd7ac69c2b70b3277507145.jpeg",
        },
      ],
    },
  },
}
