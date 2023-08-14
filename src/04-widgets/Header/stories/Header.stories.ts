import { Header } from "../ui/Header"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
  title: "Components/Widgets/Header",
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
