import Spinner from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Spinner> = {
  title: "Components/Common/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const SpinnerWhite: Story = {
  args: {
    color: "white",
    size: 36,
  },
}

export const SpinnerLime: Story = {
  args: {
    color: "lime",
    size: 36,
  },
}

export const SpinnerGray: Story = {
  args: {
    color: "gray",
    size: 36,
  },
}

export const SpinnerRed: Story = {
  args: {
    color: "red",
    size: 36,
  },
}

export const SpinnerBlue: Story = {
  args: {
    color: "blue",
    size: 36,
  },
}

export const SpinnerOrange: Story = {
  args: {
    color: "orange",
    size: 36,
  },
}

export const SpinnerGreen: Story = {
  args: {
    color: "green",
    size: 36,
  },
}

export const SpinnerBisky: Story = {
  args: {
    color: "bisky",
    size: 36,
  },
}
