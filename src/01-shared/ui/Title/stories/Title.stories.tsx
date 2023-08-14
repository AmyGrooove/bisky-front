import { Title } from "../ui/Title"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Title> = {
  title: "Components/UI/Title",
  component: Title,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Title>

export const TitleH1: Story = {
  args: {
    order: 1,
    children: "Lorem ipsum dolor",
  },
}

export const TitleH2: Story = {
  args: {
    order: 2,
    children: "Lorem ipsum dolor",
  },
}

export const TitleH3: Story = {
  args: {
    order: 3,
    children: "Lorem ipsum dolor",
  },
}

export const TitleH4: Story = {
  args: {
    order: 4,
    children: "Lorem ipsum dolor",
  },
}

export const TitleH5: Story = {
  args: {
    order: 5,
    children: "Lorem ipsum dolor",
  },
}

export const TitleH6: Story = {
  args: {
    order: 6,
    children: "Lorem ipsum dolor",
  },
}
