import { Meta, StoryObj } from "@storybook/react"

import { Season } from "../ui/Season"

const meta: Meta<typeof Season> = {
  title: "molecules/Season",
  component: Season,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Season>

export const Default: Story = {
  args: {
    title: "Невероятное приключение ДжоДжо: Рыцари звёздной пыли",
    poster:
      "https://sun9-38.userapi.com/impg/o2fsOfta4k2qhRiXZBTaO1oCG9sjk5nzflgfyg/x_osbMnSFzk.jpg?size=182x252&quality=96&sign=2381e0d1436d592963162509605295a0&type=album",
    rating: "10",
    genres: ["ДжоДжо", "ДжоДжо", "ДжоДжо"],
    backgroundImages: [
      "https://shikimori.one/system/screenshots/original/2f8f1b9fd9596c173e94edb5c5721b0048f93bf0.jpg",
      "https://shikimori.one/system/screenshots/original/6e398fea84ae6fb3a1650025aef1ce06afe635de.jpg",
      "https://shikimori.one/system/screenshots/original/bc28b954e460241d2f03180ed29bcd5e83026658.jpg",
      "https://shikimori.one/system/screenshots/original/ed6914eb5fb86b9bcf8ce8234ac17a473a40917e.jpg",
      "https://shikimori.one/system/screenshots/original/fe55648b47fe346d29b91c0e05683e3b50209a30.jpg",
      "https://shikimori.one/system/screenshots/original/2ecfbfffa3f021f2b6e3076d727ee2029ac1a77e.jpg",
    ],
  },
}
