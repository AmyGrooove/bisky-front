import { notFound } from "next/navigation"

import Slider from "@/components/Common/Slider"
import Title from "@/components/Common/Title"
import { getOneAnimeInfo } from "@/services"

interface IScreenshots {
  animeId: number
}

const Screenshots = async ({ animeId }: IScreenshots) => {
  const animeInfo = await getOneAnimeInfo(animeId)

  if (!animeInfo) {
    return notFound()
  }

  return (
    <div>
      <div>
        <Title order={2}>Кадры</Title>
        <Slider images={animeInfo.screenshots} />
      </div>
    </div>
  )
}

export default Screenshots
