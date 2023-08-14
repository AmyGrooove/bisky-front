import { Badge } from "../ui/Badge"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Badge> = {
  title: "Components/UI/Badge",
  component: Badge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Badge>

export const BadgeLime: Story = {
  args: {
    children: "lime",
    color: "lime",
  },
}

export const BadgeGray: Story = {
  args: {
    children: "gray",
    color: "gray",
  },
}

export const BadgeRed: Story = {
  args: {
    children: "red",
    color: "red",
  },
}

export const BadgeBlue: Story = {
  args: {
    children: "blue",
    color: "blue",
  },
}

export const BadgeOrange: Story = {
  args: {
    children: "orange",
    color: "orange",
  },
}

export const BadgeGreen: Story = {
  args: {
    children: "green",
    color: "green",
  },
}

export const BadgeWhite: Story = {
  args: {
    children: "white",
    color: "white",
  },
}

export const BadgeBisky: Story = {
  args: {
    children: "bisky",
    color: "bisky",
  },
}

export const BadgeCalculateLime: Story = {
  args: {
    children: "10.0",
    calculate: true,
  },
}

export const BadgeCalculateGray: Story = {
  args: {
    children: "6.9",
    calculate: true,
  },
}

export const BadgeCalculateRed: Story = {
  args: {
    children: "4.9",
    calculate: true,
  },
}

export const BadgeTransparent: Story = {
  args: {
    children: "transparent",
  },
}
