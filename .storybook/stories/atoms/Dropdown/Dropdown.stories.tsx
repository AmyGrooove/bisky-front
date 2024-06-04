import React from "react"
import { Dropdown } from "../../../../src/shared/ui/atoms"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Dropdown> = {
  title: "shared/atoms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    callComponent: <button>Open DropDown</button>,
    children: (
      <div style={{ backgroundColor: "white", padding: "20px" }}>Dropdown</div>
    ),
  },
}
