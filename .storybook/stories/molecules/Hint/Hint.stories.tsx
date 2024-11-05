import React from "react"

import { Button, Hint } from "../../../../src/shared/ui/molecules"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Hint> = {
  title: "shared/molecules/Hint",
  component: Hint,
  tags: ["autodocs"],
  render: (args) => (
    <Hint {...args}>
      <Button>hint</Button>
    </Hint>
  ),
}

export default meta
type Story = StoryObj<typeof Hint>

export const Text: Story = { args: { hintElement: "hint text" } }

export const Element: Story = {
  args: { hintElement: <Button>hint button</Button> },
}
