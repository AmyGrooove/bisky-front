import { Meta, StoryObj } from "@storybook/react"

import { Header } from "../ui/Header"

const meta: Meta<typeof Header> = {
  title: "features/Header",
  component: Header,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
