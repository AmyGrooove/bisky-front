import { getAnimePages } from "@/02-entities/anime"
import { AnimePosterCard } from "@/04-widgets/AnimePosterCard"

import styles from "./Catalog.module.scss"

interface ICatalog {}

const Catalog = async ({}: ICatalog) => {
  const animePages = await getAnimePages(50)

  return (
    <div className={styles.catalog}>
      {animePages?.map((item, index) => (
        <AnimePosterCard key={item.id} anime={item} />
      ))}
    </div>
  )
}

export { Catalog }
