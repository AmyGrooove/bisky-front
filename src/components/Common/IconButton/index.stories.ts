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

export const IconButtonDefault: Story = {
  args: {
    iconName: ARROW,
  },
}

export const IconButtonDisable: Story = {
  args: {
    iconName: ARROW,
    disabled: true,
  },
}
