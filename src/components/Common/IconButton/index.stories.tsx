import { ArrowIcon } from "@/Icons"

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
    icon: <ArrowIcon />,
  },
}

export const IconButtonFilled: Story = {
  args: {
    variant: "filled",
    icon: <ArrowIcon />,
  },
}

export const IconButtonDisable: Story = {
  args: {
    icon: <ArrowIcon />,
    disabled: true,
  },
}
