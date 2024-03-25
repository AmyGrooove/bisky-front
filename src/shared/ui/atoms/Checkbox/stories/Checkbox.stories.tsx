import { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "../ui/Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
}

export const Disable: Story = {
  args: { disabled: true },
}

export const KindCheckMark: Story = {
  args: { kind: "check_mark" },
}

export const KindPoint: Story = {
  args: { kind: "point" },
}

export const Text: Story = {
  args: { children: "Checkbox" },
}
