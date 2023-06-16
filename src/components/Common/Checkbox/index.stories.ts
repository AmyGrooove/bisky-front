import Checkbox from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Common/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const CheckboxWithoutLabel: Story = {
  args: {},
}

export const CheckboxWithLabel: Story = {
  args: {
    label: "Lorem ipsum dolor sit amet consectetur",
  },
}
