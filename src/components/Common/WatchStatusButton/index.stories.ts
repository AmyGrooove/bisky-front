import WatchStatusButton from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof WatchStatusButton> = {
  title: "Common/WatchStatusButton",
  component: WatchStatusButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WatchStatusButton>

export const WatchStatusButtonAdded: Story = {
  args: {
    status: "added",
  },
}

export const WatchStatusButtonComplete: Story = {
  args: {
    status: "complete",
  },
}
export const WatchStatusButtonDropped: Story = {
  args: {
    status: "dropped",
  },
}
export const WatchStatusButtonSetWatch: Story = {
  args: {
    status: "setWatch",
  },
}
export const WatchStatusButtonWatching: Story = {
  args: {
    status: "watching",
  },
}
