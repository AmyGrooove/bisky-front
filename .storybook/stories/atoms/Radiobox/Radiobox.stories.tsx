import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { Radiobox } from "../../../../src/shared/ui/atoms"

const meta: Meta<typeof Radiobox> = {
  title: "shared/atoms/Radiobox",
  component: Radiobox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Radiobox>

export const Default: Story = {
  render: () => (
    <>
      <Radiobox name="radio" />
      <Radiobox name="radio" />
      <Radiobox name="radio" />
    </>
  ),
}

export const Disabled: Story = { args: { disabled: true } }
