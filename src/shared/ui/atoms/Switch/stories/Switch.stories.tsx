import { Meta, StoryObj } from "@storybook/react"

import { Switch } from "../ui/Switch"

const meta: Meta<typeof Switch> = {
  title: "atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Disabled: Story = { args: { disabled: true } }
