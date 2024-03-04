import { ClockIcon } from "@shared/icons"

import { Badge } from "../ui/Badge"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Badge> = {
  title: "molecules/Badge",
  component: Badge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Badge>

export const IconRight: Story = {
  args: {
    text: "Badge",
    iconRight: <ClockIcon width="15px" height="15px" />,
  },
}

export const IconLeft: Story = {
  args: {
    text: "Badge",
    iconLeft: <ClockIcon width="15px" height="15px" />,
  },
}

export const Icon: Story = {
  args: { iconLeft: <ClockIcon width="15px" height="15px" /> },
}
