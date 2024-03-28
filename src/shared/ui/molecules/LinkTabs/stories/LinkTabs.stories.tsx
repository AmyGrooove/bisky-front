import { Meta, StoryObj } from "@storybook/react"

import { LinkTabs } from "../ui/LinkTabs"

const meta: Meta<typeof LinkTabs> = {
  title: "molecules/LinkTabs",
  component: LinkTabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkTabs>

export const Default: Story = {
  args: {
    items: [
      { name: "Tab1", href: "#" },
      { name: "Tab2", href: "#", isActive: true },
      { name: "Tab3", href: "#", isDisabled: true },
      { name: "Tab3", href: "#", isActive: true, isDisabled: true },
    ],
  },
}
