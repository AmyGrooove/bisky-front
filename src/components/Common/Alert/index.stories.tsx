import Alert from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Alert> = {
  title: "Components/Common/Alert",
  component: Alert,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Alert>

export const AlertRed: Story = {
  args: {
    title: "Bummer!",
    children:
      "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
    color: "red",
  },
}

export const AlertGreen: Story = {
  args: {
    title: "Bummer!",
    children:
      "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
    color: "green",
  },
}

export const AlertBlue: Story = {
  args: {
    title: "Bummer!",
    children:
      "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
    color: "blue",
  },
}

export const AlertOrange: Story = {
  args: {
    title: "Bummer!",
    children:
      "Something terrible happened! You made a mistake and there is no going back, your data was lost forever!",
    color: "orange",
  },
}
