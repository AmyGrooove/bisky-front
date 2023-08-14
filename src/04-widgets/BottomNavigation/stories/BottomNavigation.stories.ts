import { BottomNavigation } from "../ui/BottomNavigation"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/Widgets/BottomNavigation",
  component: BottomNavigation,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BottomNavigation>

export const BottomNavigationDefault: Story = {
  args: {},
}
