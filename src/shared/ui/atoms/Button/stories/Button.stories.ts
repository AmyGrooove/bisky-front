import { Button } from "../ui/Button"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Disabled: Story = {
  args: { isDisabled: true },
}
