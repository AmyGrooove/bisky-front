import { ARROW } from "@/constants"

import IconButton from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IconButton> = {
  title: "Components/Common/IconButton",
  component: IconButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IconButton>

export const IconButtonSubtle: Story = {
  args: {
    variant: "subtle",
    iconName: ARROW,
  },
}

export const IconButtonFilled: Story = {
  args: {
    variant: "filled",
    iconName: ARROW,
  },
}

export const IconButtonDisable: Story = {
  args: {
    iconName: ARROW,
    disabled: true,
  },
}
