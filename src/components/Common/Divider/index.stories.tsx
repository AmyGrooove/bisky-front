import Divider from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Divider> = {
  title: "Components/Common/Divider",
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

export const DividerBisky: Story = {
  args: {
    color: "bisky",
  },
}
