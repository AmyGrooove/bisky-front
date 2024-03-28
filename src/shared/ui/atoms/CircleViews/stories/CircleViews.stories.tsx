import { CircleViews } from "../ui/CircleViews"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof CircleViews> = {
  title: "atoms/CircleViews",
  component: CircleViews,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CircleViews>

export const Default: Story = {
  args: {
    addedCount: 35,
    completeCount: 35,
    droppedCount: 15,
    watchingCount: 15,
  },
}
