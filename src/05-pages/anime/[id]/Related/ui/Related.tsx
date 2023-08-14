import {
  ShortAnimeInfoType,
} from "@/02-entities/anime"
import { Carousel } from "@/03-features/Carousel"
import { AnimePosterCard } from "@/04-widgets/AnimePosterCard"

interface IRelated {
  animes: Array<ShortAnimeInfoType & { relation: { en: string; ru: string } }>
}

const Related = async ({ animes }: IRelated) => {
  if (animes.length === 0) {
    return null
  }

  return (
    <Carousel
      label="Связанное"
      labelButtons
      loop
      spaceBetween={20}
      slides={animes.map((item) => (
        <AnimePosterCard
          key={item.id}
          anime={{
            episodes: {
              count: null,
              aired: null,
              duration: 0,
              nextEpisodeAt: null,
            },
            ...item,
          }}
        />
      ))}
      keys={animes.map((item) => item.id.toString())}
    />
  )
}

export { Related }
