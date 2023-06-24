import AnimePosterCard from "@/components/Common/AnimePosterCard"
import { getAnimePages } from "@/services"

import styles from "./index.module.scss"

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

export default Catalog
