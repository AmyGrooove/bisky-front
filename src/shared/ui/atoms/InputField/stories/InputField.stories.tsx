import { Meta, StoryObj } from "@storybook/react"

import { SearchIcon } from "@/shared/icons"

import { InputField } from "../ui/InputField"

const meta: Meta<typeof InputField> = {
  title: "atoms/InputField",
  component: InputField,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: { value: "", onChange: () => {}, placeholder: "placeholder" },
}

export const Active: Story = {
  args: { value: "input", onChange: () => {}, placeholder: "placeholder" },
}

export const Icon: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholder: "placeholder",
    icon: <SearchIcon />,
  },
}

export const IconActive: Story = {
  args: {
    value: "input",
    onChange: () => {},
    placeholder: "placeholder",
    icon: <SearchIcon />,
  },
}

export const LightTheme: Story = {
  args: {
    value: "input",
    onChange: () => {},
    placeholder: "placeholder",
    icon: <SearchIcon />,
    theme: "light",
  },
}
