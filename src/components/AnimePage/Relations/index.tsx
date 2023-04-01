import { useContext } from "react"

import PosterSlider from "@/components/Common/PosterSlider"
import { AnimeInfoContext } from "@/pages/anime/[animeId]"
import BlockLabel from "@/components/Common/BlockLabel"

import styles from "./index.module.scss"

const Relations = () => {
  const { relations } = useContext(AnimeInfoContext)

  return (
    <>
      {relations.animes.length !== 0 && (
        <section className={styles.relations}>
          <BlockLabel label="Связанное" h4 slider />
          <PosterSlider data={relations.animes.map((el) => el.link)} />
        </section>
      )}
    </>
  )
}

export default Relations
