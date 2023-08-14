import { Rating } from "../ui/Rating"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Rating> = {
  title: "Components/UI/Rating",
  component: Rating,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Rating>

export const RatingDefault: Story = {
  args: {
    defaultValue: 7.8,
  },
}

export const RatingWithLabels: Story = {
  args: {
    defaultValue: 4,
    withLabels: true,
  },
}

export const RatingReadOnly: Story = {
  args: {
    defaultValue: 4.5,
    count: 5,
    readOnly: true,
  },
}
