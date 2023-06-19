import ScoreBadge from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ScoreBadge> = {
  title: "Components/Common/ScoreBadge",
  component: ScoreBadge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ScoreBadge>

export const ScoreBadgeBad: Story = {
  args: {
    score: 1.2,
  },
}

export const ScoreBadgeNormal: Story = {
  args: {
    score: 5.7,
  },
}

export const ScoreBadgeExcellent: Story = {
  args: {
    score: 9.7,
  },
}
