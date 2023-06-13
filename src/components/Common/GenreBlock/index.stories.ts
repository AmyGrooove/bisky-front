import GenreCard from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof GenreCard> = {
  title: "Components/Common/GenreCard",
  component: GenreCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof GenreCard>

export const GenreCardIsekai: Story = {
  args: {
    title: "Исекай",
    imgSrc: "57e7ed3ab8f60b2c5562827a1453aa8ef4ad7ba2",
    children: "это аниме о `попаданцах`, которые попали в другой",
  },
}
