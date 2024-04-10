import { Meta, StoryObj } from "@storybook/react"

import { Footer } from "../ui/Footer"

const meta: Meta<typeof Footer> = {
  title: "features/Footer",
  component: Footer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
