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

export const IconRight: Story = {
  args: { iconRight: <ClockIcon width="24px" height="24px" /> },
}

export const IconLeft: Story = {
  args: { iconLeft: <ClockIcon width="24px" height="24px" /> },
}

export const Icon: Story = {
  args: { children: "", iconLeft: <ClockIcon width="24px" height="24px" /> },
}

export const DisabledIconRight: Story = {
  args: { disabled: true, iconRight: <ClockIcon width="24px" height="24px" /> },
}

export const DisabledIconLeft: Story = {
  args: { disabled: true, iconLeft: <ClockIcon width="24px" height="24px" /> },
}

export const DisabledIcon: Story = {
  args: {
    disabled: true,
    children: "",
    iconLeft: <ClockIcon width="24px" height="24px" />,
  },
}
