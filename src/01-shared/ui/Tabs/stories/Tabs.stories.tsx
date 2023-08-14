import { Tabs } from "../ui/Tabs"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Tabs> = {
  title: "Components/UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const TabsDefault: Story = {
  args: {
    defaultValue: "profile",
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="profile">Профиль</Tabs.Tab>
          <Tabs.Tab value="friends">Друзья</Tabs.Tab>
          <Tabs.Tab value="settings">Настройки</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="profile">Я панель профиля</Tabs.Panel>
        <Tabs.Panel value="friends">Я панель друзей</Tabs.Panel>
        <Tabs.Panel value="settings">Я панель настроек</Tabs.Panel>
      </>
    ),
  },
}
