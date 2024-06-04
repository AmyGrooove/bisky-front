import { Meta, StoryObj } from "@storybook/react"

import { LinkLabel } from "../../../../src/shared/ui/molecules"

const meta: Meta<typeof LinkLabel> = {
  title: "shared/molecules/LinkLabel",
  component: LinkLabel,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkLabel>

export const Default: Story = {
  args: { label: "Label", linkText: "linkText", href: "#" },
}
