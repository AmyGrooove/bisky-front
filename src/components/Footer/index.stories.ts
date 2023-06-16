import Footer from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Footer>

export const FooterDefault: Story = {
  args: {},
}
