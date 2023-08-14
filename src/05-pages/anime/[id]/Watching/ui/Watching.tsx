import { getKodikData } from "@/02-entities/kodik"
import { PlayersTabs } from "@/04-widgets/PlayersTabs"

interface IWatching {
  animeId: number
  labels: string[]
}

const Watching = async ({ animeId, labels }: IWatching) => {
  const kodikData = await getKodikData(animeId)

  return (
    <div>
      <PlayersTabs
        kodikLink={kodikData.data?.results[0].link}
        labels={labels}
      />
    </div>
  )
}

export { Watching }
