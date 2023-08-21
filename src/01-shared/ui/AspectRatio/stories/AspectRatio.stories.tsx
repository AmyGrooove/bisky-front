import { AppImage } from "../../AppImage"
import { AspectRatio } from "../ui/AspectRatio"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AspectRatio> = {
  title: "Components/UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const AspectRatioImage: Story = {
  args: {
    children: (
      <AppImage
        src={"d2c9680a9a7a4a0a092c5b29a2445bbb7b4bc3f2"}
        width={1920}
        height={1080}
        imageType="screenshot"
      />
    ),
    ratio: 16 / 9,
  },
}

export const AspectRatioMap: Story = {
  args: {
    children: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        frameBorder="0"
      />
    ),
    ratio: 720 / 1080,
  },
}

export const AspectRatioVideo: Story = {
  args: {
    children: (
      <iframe
        src="https://www.youtube.com/embed/Dorf8i6lCuk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
    ratio: 16 / 9,
  },
}
