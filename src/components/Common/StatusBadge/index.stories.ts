import StatusBadge from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof StatusBadge> = {
  title: "Common/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const StatusBadgeOngoing: Story = {
  args: {
    status: "ongoing",
    children: "ongoing",
  },
}

export const StatusBadgeAnons: Story = {
  args: {
    status: "anons",
    children: "anons",
  },
}

export const StatusBadgeReleased: Story = {
  args: {
    status: "released",
    children: "released",
  },
}

export const StatusBadgeRed: Story = {
  args: {
    status: "red",
    children: "red",
  },
}
