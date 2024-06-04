import { Meta, StoryObj } from "@storybook/react"

import { Spinner } from "../../../../src/shared/ui/atoms"

const meta: Meta<typeof Spinner> = {
  title: "shared/atoms/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: { style: { width: "50px", height: "50px" } },
}
