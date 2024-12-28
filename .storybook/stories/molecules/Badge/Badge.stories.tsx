import React from "react"
import { ClockIcon } from "../../../../src/shared/icons"

import { Badge } from "../../../../src/shared/ui/molecules"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Badge> = {
  title: "shared/molecules/Badge",
  component: Badge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Small: Story = {
  args: { children: "Badge", style: { backgroundColor: "purple" } },
}

export const Medium: Story = {
  args: {
    children: "Badge",
    style: { backgroundColor: "purple" },
    variant: "medium",
  },
}

export const Big: Story = {
  args: {
    children: "Badge",
    style: { backgroundColor: "purple" },
    variant: "big",
  },
}

export const RightIcon: Story = {
  args: {
    children: "Badge",
    rightIcon: <ClockIcon />,
    style: { backgroundColor: "purple" },
  },
}

export const LeftIcon: Story = {
  args: {
    children: "Badge",
    leftIcon: <ClockIcon />,
    style: { backgroundColor: "purple" },
  },
}

export const OnlyIcon: Story = {
  args: { leftIcon: <ClockIcon />, style: { backgroundColor: "purple" } },
}
