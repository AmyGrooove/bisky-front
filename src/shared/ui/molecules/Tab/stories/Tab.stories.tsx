import { Meta, StoryObj } from "@storybook/react"

import { Tab } from "../ui/Tab"

const meta: Meta<typeof Tab> = {
  title: "molecules/Tab",
  component: Tab,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tab>

export const Default: Story = {
  args: { text: "Каталог", href: "#" },
}

export const ActiveOrHover: Story = {
  args: { text: "Каталог", href: "#", active: true },
}
