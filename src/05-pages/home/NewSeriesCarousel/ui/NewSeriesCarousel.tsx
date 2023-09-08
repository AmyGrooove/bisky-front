import { Carousel } from "@/03-features/Carousel"
import { AnimePosterCard } from "@/04-widgets/AnimePosterCard"
import { getNewSeriesAnimes } from "@/04-widgets/AnimePosterCard/api"

const NewSeriesCarousel = async () => {
  const newSeriesSlides = (await getNewSeriesAnimes()) ?? []

  return (
    <Carousel
      spaceBetween={24}
      slides={newSeriesSlides.map((el) => (
        <AnimePosterCard
          key={el.id}
          posterType="newSeries"
          anime={{
            id: el.id,
            labels: el.labels,
            scores: el.scores,
            anotherScores: el.anotherScores,
            status: el.status,
            episodes: el.episodes,
          }}
        />
      ))}
      keys={newSeriesSlides.map((el) => String(el.id))}
    />
  )
}

export { NewSeriesCarousel }
