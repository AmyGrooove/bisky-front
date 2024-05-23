import { ClockIcon } from "@shared/icons"

import { Button } from "../ui/Button"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "shared/molecules/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { children: "Button" } }

export const RightIcon: Story = {
  args: { children: "Button", rightIcon: <ClockIcon /> },
}

export const LeftIcon: Story = {
  args: { children: "Button", leftIcon: <ClockIcon /> },
}

export const OnlyIcon: Story = { args: { leftIcon: <ClockIcon /> } }

export const Disabled: Story = { args: { children: "Button", disabled: true } }
