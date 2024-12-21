import React from "react"
import { ClockIcon } from "../../../../src/shared/icons"

import { Button } from "../../../../src/shared/ui/molecules"

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
  args: {
    children: "Button",
    renderRightIcon: (iconProps) => <ClockIcon {...iconProps} />,
  },
}

export const LeftIcon: Story = {
  args: {
    children: "Button",
    renderLeftIcon: (iconProps) => <ClockIcon {...iconProps} />,
  },
}

export const OnlyIcon: Story = {
  args: { renderLeftIcon: (iconProps) => <ClockIcon {...iconProps} /> },
}

export const Disabled: Story = { args: { children: "Button", disabled: true } }
