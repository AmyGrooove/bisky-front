import Carousel from "@/components/Common/Carousel"
import { getOneAnimeInfo } from "@/services"

interface IVideo {
  animeId: number
}

const Video = async ({ animeId }: IVideo) => {
  const animeInfo = await getOneAnimeInfo(animeId)

  return (
    <Carousel
      variant="Screenshots"
      carouselData={animeInfo?.screenshots}
      withTitle
      title="Видео"
    />
  )
}

export default Video
