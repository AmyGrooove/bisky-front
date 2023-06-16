import BottomNavigation from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BottomNavigation>

export const BottomNavigationDefault: Story = {
  args: {},
}
