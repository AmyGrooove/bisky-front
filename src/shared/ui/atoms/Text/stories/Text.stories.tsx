import { Text } from "../ui/Text"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Text> = {
  title: "atoms/Text",
  component: Text,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Text>

export const Size12: Story = { args: { children: "Text", size: "12" } }

export const Size16: Story = { args: { children: "Text", size: "16" } }

export const Size20: Story = { args: { children: "Text", size: "20" } }

export const Size24: Story = { args: { children: "Text", size: "24" } }

export const Size28: Story = { args: { children: "Text", size: "28" } }

export const Size32: Story = { args: { children: "Text", size: "32" } }

export const Size44: Story = { args: { children: "Text", size: "44" } }

export const Weight400: Story = { args: { children: "Text", weight: "400" } }

export const Weight700: Story = { args: { children: "Text", weight: "700" } }

export const AsH1: Story = { args: { children: "Text", as: "h1" } }
