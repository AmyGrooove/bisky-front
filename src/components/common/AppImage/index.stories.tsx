import AppImage from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AppImage> = {
  title: "Components/Common/AppImage",
  component: AppImage,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppImage>

export const AppImagePoster: Story = {
  args: {
    imageType: "poster",
    src: "1",
    width: 200,
    height: 300,
  },
}

export const AppImageScreenshot: Story = {
  args: {
    imageType: "screenshot",
    src: "7dbd1ea43c9b27c8b95d3205ced47e936914b65e",
    width: 1000,
    height: 500,
  },
}

export const AppImageAnother: Story = {
  args: {
    src: "https://cdn.discordapp.com/attachments/680080273697800289/1122626200062398604/024809_dota.gallery_Marci_1_Hero_Chest_SFM_3D_Art_View_half-turn.jpg",
    width: 200,
    height: 200,
  },
}
