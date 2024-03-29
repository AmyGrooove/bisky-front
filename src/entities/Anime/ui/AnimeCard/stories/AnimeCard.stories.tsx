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
    href: "#",
    anime: {
      poster:
        "https://sun9-38.userapi.com/impg/o2fsOfta4k2qhRiXZBTaO1oCG9sjk5nzflgfyg/x_osbMnSFzk.jpg?size=182x252&quality=96&sign=2381e0d1436d592963162509605295a0&type=album",
      label: "Невероятное приключение ДжоДжо: Рыцари звёздной пыли",
      score: 7.2,
      status: "released",
      inListCount: 1234,
      airedSeriesCount: 4,
    },
    userData: {
      status: null,
      score: null,
    },
  },
}

export const Ongoing: Story = {
  args: {
    href: "#",
    anime: {
      poster:
        "https://sun9-38.userapi.com/impg/o2fsOfta4k2qhRiXZBTaO1oCG9sjk5nzflgfyg/x_osbMnSFzk.jpg?size=182x252&quality=96&sign=2381e0d1436d592963162509605295a0&type=album",
      label: "Невероятное приключение ДжоДжо: Рыцари звёздной пыли",
      score: 7.2,
      status: "ongoing",
      inListCount: 1234,
      airedSeriesCount: 4,
    },
    userData: {
      status: null,
      score: null,
    },
  },
}

export const Anons: Story = {
  args: {
    href: "#",
    anime: {
      poster:
        "https://sun9-38.userapi.com/impg/o2fsOfta4k2qhRiXZBTaO1oCG9sjk5nzflgfyg/x_osbMnSFzk.jpg?size=182x252&quality=96&sign=2381e0d1436d592963162509605295a0&type=album",
      label: "Невероятное приключение ДжоДжо: Рыцари звёздной пыли",
      score: 7.2,
      status: "anons",
      inListCount: 1234,
      airedSeriesCount: 4,
    },
    userData: {
      status: null,
      score: null,
    },
  },
}

export const UserLogged: Story = {
  args: {
    href: "#",
    anime: {
      poster:
        "https://sun9-38.userapi.com/impg/o2fsOfta4k2qhRiXZBTaO1oCG9sjk5nzflgfyg/x_osbMnSFzk.jpg?size=182x252&quality=96&sign=2381e0d1436d592963162509605295a0&type=album",
      label: "Невероятное приключение ДжоДжо: Рыцари звёздной пыли",
      score: 7.2,
      status: "ongoing",
      inListCount: 1234,
      airedSeriesCount: 4,
    },
    userData: {
      onClick: () => console.log("added"),
      userLogged: true,
      status: null,
      score: null,
    },
  },
}

export const UserData: Story = {
  args: {
    href: "#",
    anime: {
      poster:
        "https://sun9-38.userapi.com/impg/o2fsOfta4k2qhRiXZBTaO1oCG9sjk5nzflgfyg/x_osbMnSFzk.jpg?size=182x252&quality=96&sign=2381e0d1436d592963162509605295a0&type=album",
      label: "Невероятное приключение ДжоДжо: Рыцари звёздной пыли",
      score: 7.2,
      status: "ongoing",
      inListCount: 1234,
      airedSeriesCount: 4,
    },
    userData: {
      onClick: () => console.log("added"),
      userLogged: true,
      status: "complete",
      score: 7,
    },
  },
}
