import { useContext } from "react"

import { AnimeInfoContext } from "@/pages/anime/[animeId]"

import styles from "./index.module.scss"

const Episodes = () => {
  const { status, episodes } = useContext(AnimeInfoContext)

  const episodeCountCheck = episodes.count ? episodes.count : "?"

  return (
    <>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Количество серий:</span>
        <h5 className={styles.addInfo__info__text}>
          {status !== "released"
            ? episodes.aired + "/" + episodeCountCheck
            : episodeCountCheck}
        </h5>
      </div>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Длительность серии:</span>
        <h4 className={styles.addInfo__info__text}>
          {episodes.duration + " мин"}
        </h4>
      </div>
      <span className={styles.addInfo__br} />
    </>
  )
}

export default Episodes
