import { FactBlock } from "../ui/FactBlock"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FactBlock> = {
  title: "entities/Fact/FactBlock",
  component: FactBlock,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FactBlock>

export const Default: Story = {
  args: {
    fact: {
      en: "Fandub is an amateur translation of anime through voice acting, distributed free of charge on the Internet.",
      ru: "Фандаб — любительский перевод аниме путём озвучки, бесплатно распространяемая в интернете.",
    },
  },
}
