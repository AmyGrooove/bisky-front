import Button from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "Components/Common/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const ButtonFilled: Story = {
  args: {
    variant: "filled",
    children: "Button",
  },
}

export const ButtonSubtle: Story = {
  args: {
    variant: "subtle",
    children: "Button",
  },
}

export const ButtonOutline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
}

export const ButtonDisable: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
}
