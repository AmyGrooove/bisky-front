import { Meta, StoryObj } from "@storybook/react"

import { PlaceholderImage } from "../ui/PlaceholderImage"

const meta: Meta<typeof PlaceholderImage> = {
  title: "shared/atoms/PlaceholderImage",
  component: PlaceholderImage,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof PlaceholderImage>

export const Default: Story = {
  args: {
    src: "https://shikimori.one/system/screenshots/original/e32abdff7530516ceb814ac60a9982c50060a4cb.jpg",
    width: 800,
    height: 400,
  },
}
