import ErrorCard from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ErrorCard> = {
  title: "Components/Common/ErrorCard",
  component: ErrorCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ErrorCard>

export const ErrorCard404: Story = {
  args: {
    type: "404",
  },
}

export const ErrorCard500: Story = {
  args: {
    type: "500",
  },
}
