import { Meta, StoryObj } from "@storybook/react"

import { Skeleton } from "../../../../src/shared/ui/atoms"

const meta: Meta<typeof Skeleton> = {
  title: "shared/atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: { style: { width: "400px", height: "400px" } },
}
