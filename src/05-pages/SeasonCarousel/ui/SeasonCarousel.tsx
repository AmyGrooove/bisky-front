import { Carousel } from "@/03-features/Carousel"
import { AnimeSeasonCard } from "@/04-widgets/AnimeSeasonCard"
import { getCurrentSeasonAnimes } from "@/04-widgets/AnimeSeasonCard/api"

import styles from "./SeasonCarousel.module.scss"

const SeasonCarousel = async () => {
  const seasonSlides = (await getCurrentSeasonAnimes()) ?? []

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
      className={styles.seasonCarousel}
    />
  )
}

export { SeasonCarousel }
