import Header from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>

export const HeaderDefault: Story = {
  args: {
    children: "",
  },
}
