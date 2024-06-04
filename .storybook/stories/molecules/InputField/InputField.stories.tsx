import { Meta, StoryObj } from "@storybook/react"

import { InputField } from "../../../../src/shared/ui/molecules"

const meta: Meta<typeof InputField> = {
  title: "shared/molecules/InputField",
  component: InputField,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof InputField>

export const DefaultDark: Story = { args: { placeholder: "placeholder" } }

export const DefaultLight: Story = {
  args: { placeholder: "placeholder", variant: "light" },
}

export const DarkIcon: Story = {
  args: { placeholder: "placeholder", isSearchIconOn: true },
}

export const LightIcon: Story = {
  args: { placeholder: "placeholder", variant: "light", isSearchIconOn: true },
}

export const Disabled: Story = {
  args: { placeholder: "placeholder", disabled: true },
}

export const DisabledIcon: Story = {
  args: { placeholder: "placeholder", disabled: true, isSearchIconOn: true },
}

export const WithLabel: Story = {
  args: { label: "Label" },
}
