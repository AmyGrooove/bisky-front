import { ClockIcon } from "@shared/icons"

import { Button } from "../ui/Button"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "molecules/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { children: "Button" } }

export const IconRight: Story = {
  args: { children: "Button", iconRight: <ClockIcon /> },
}

export const IconLeft: Story = {
  args: { children: "Button", iconLeft: <ClockIcon /> },
}

export const OnlyIcon: Story = { args: { iconLeft: <ClockIcon /> } }

export const Disabled: Story = { args: { children: "Button", disabled: true } }
