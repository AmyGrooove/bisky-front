import AnimeSeasonCard from "@/components/common/AnimeSeasonCard"
import Carousel from "@/components/common/Carousel"
import { seasonCarouselService } from "@/services"

const SeasonCarousel = async () => {
  const seasonSlides = (await seasonCarouselService()) ?? []

  return (
    <Carousel
      centeredSlides
      loop
      spaceBetween={60}
      autoplay={{ delay: 8000 }}
      slides={seasonSlides.map((el) => (
        <AnimeSeasonCard
          key={el.id}
          anime={{
            id: el.id,
            labels: el.labels,
            poster: el.poster,
            scores: el.scores,
            anotherScores: el.anotherScores,
            screenshots: el.screenshots,
            genres: el.genres,
          }}
        />
      ))}
      keys={seasonSlides.map((el) => String(el.id))}
    />
  )
}

export default SeasonCarousel
