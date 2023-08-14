import { Divider } from "../ui/Divider"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Divider> = {
  title: "Components/UI/Divider",
  component: Divider,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Divider>

export const DividerGray: Story = {
  args: {
    color: "gray",
  },
}

export const DividerCenter: Story = {
  args: {
    color: "gray",
    label: "Center",
  },
}

export const DividerBisky: Story = {
  args: {
    color: "bisky",
  },
}
