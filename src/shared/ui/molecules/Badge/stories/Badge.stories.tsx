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

export const Default: Story = { args: { children: "Badge" } }

export const IconRight: Story = {
  args: { children: "Badge", iconRight: <ClockIcon /> },
}

export const IconLeft: Story = {
  args: { children: "Badge", iconLeft: <ClockIcon /> },
}

export const OnlyIcon: Story = { args: { iconLeft: <ClockIcon /> } }
