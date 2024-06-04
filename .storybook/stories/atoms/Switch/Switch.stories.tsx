import { Meta, StoryObj } from "@storybook/react"

import { Switch } from "../../../../src/shared/ui/atoms"

const meta: Meta<typeof Switch> = {
  title: "shared/atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Disabled: Story = { args: { disabled: true } }
