import Link from "next/link"
import { useContext } from "react"

import {
  dateFormat,
  getNormalKind,
  nextEpisode,
} from "@/supportingTool/functions"

import { AnimeInfoContext } from ".."

import styles from "./index.module.scss"

const TypeStatus = () => {
  const { kind, status, episodes } = useContext(AnimeInfoContext)

  return (
    <>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Тип:</span>
        <Link href="#" className={styles.addInfo__info__link}>
          <h4 className={styles.addInfo__info__text}>{getNormalKind(kind)}</h4>
        </Link>
      </div>
      <div className={styles.addInfo__info}>
        <span className={styles.addInfo__info__label}>Статус:</span>
        <Link href="#" className={styles.addInfo__info__link}>
          <h4 className={`${styles.addInfo__info__status} ${status}`}>
            {status}
          </h4>
        </Link>
      </div>
      {episodes.next_episode_at && (
        <div
          className={`${styles.addInfo__info} ${styles.addInfo__info__nextEpisode}`}
          data-content={dateFormat(episodes.next_episode_at)}
        >
          <span className={styles.addInfo__info__label}>До новой серии:</span>
          <h5 className={styles.addInfo__info__text}>
            {nextEpisode(episodes.next_episode_at)}
          </h5>
        </div>
      )}
    </>
  )
}

export default TypeStatus
