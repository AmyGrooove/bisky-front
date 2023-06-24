import Carousel from "@/components/Common/Carousel"
import { getOneAnimeInfo } from "@/services"

interface IScreenshots {
  animeId: number
}

const Screenshots = async ({ animeId }: IScreenshots) => {
  const animeInfo = await getOneAnimeInfo(animeId)

  return (
    <Carousel
      variant="Screenshots"
      carouselData={animeInfo?.screenshots}
      withTitle
      title="Кадры"
    />
  )
}

export default Screenshots
