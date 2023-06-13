import SeasonCard from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SeasonCard> = {
  title: "Components/Common/SeasonCard",
  component: SeasonCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SeasonCard>

export const SeasonCardDefault: Story = {
  args: {
    anime: {
      shiki_id: 51535,
      labels: "Атака титанов: Финал — Заключительная глава",
      scores: 9.15,
      screenShots: [
        "57e7ed3ab8f60b2c5562827a1453aa8ef4ad7ba2",
        "5b93b65897e1efb63fc6e3ca813d4055e9fe3659",
        "1e6818d5fbebe37fc224cfec276e0a82258f4a06",
        "0447ea96f098953e30cbf911e82d459c92799c92",
        "9956f94eebcb179b2578a0647ae78fd410b3be3d",
        "b6482a4eab88952566ce6b20588d0c84ed88147d",
      ],
      genres: ["Экшен", "Военное", "Сёнен", "Драма"],
    },
  },
}
