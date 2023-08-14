import { Collapse } from "../ui/Collapse"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Collapse> = {
  title: "Components/UI/Collapse",
  component: Collapse,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Collapse>

export const CollapseWithButton: Story = {
  args: {
    numberOfLines: 4,
    children:
      "Potter ipsum wand elf parchment wingardium. Portkey hearing managed broken knew. Disciplinary cottage every sing hedwig powder mellow. Magic cutting sunshine palominos splinched muggle-born the. Doe lies crimson petrificus or beaded stone three. You polyjuice orbs world hungarian hunt trelawney be. Muggle-born captivity red thestral raw-steak lion holly.\nMemory mimubulus cakes willow mellow 50 portkey spider transfiguration than. Bean frogs is ministry-of-magic 50 and cup. Veil through witch whomping portkey poltergeist boggarts.",
  },
}

export const CollapseBound: Story = {
  args: {
    numberOfLines: 4,
    children:
      "Potter ipsum wand elf parchment wingardium. Portkey hearing managed broken knew. Disciplinary cottage every sing hedwig powder mellow. Magic cutting sunshine palominos splinched muggle-born the. Doe lies crimson petrificus or beaded stone three. You polyjuice orbs world hungarian hunt trelawney be. Muggle-born captivity red thestral raw-steak lion holly. Memory mimubulus cakes willow mellow 50 portkey spider transfiguration than. Bean frogs is",
  },
}

export const CollapseWithoutButton: Story = {
  args: {
    numberOfLines: 4,
    children: "Potter ipsum wand elf",
  },
}
