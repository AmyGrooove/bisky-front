import Input from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Input> = {
  title: "Components/Common/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

export const InputLight: Story = {
  args: {
    variant: "light",
    placeholder:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
}

export const InputDark: Story = {
  args: {
    variant: "dark",
    placeholder:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
}

export const InputDisable: Story = {
  args: {
    variant: "light",
    disabled: true,
    placeholder:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
}
