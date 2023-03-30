import Link from "next/link"
import { useContext } from "react"

import { dateFormat, getNormalRating } from "@/supportingTool/functions"
import AmyImage from "@/components/Common/AmyImage"
import { ARROW_RIGHT } from "@/theme/sources"

import { AnimeInfoContext } from ".."

import styles from "./index.module.scss"

const OtherInfo = () => {
  const { rating, studios, dates, videos, status } =
    useContext(AnimeInfoContext)

  return (
    <>
      {rating !== "none" && (
        <div className={styles.addInfo__info}>
          <span className={styles.addInfo__info__label}>Ограничения:</span>
          <Link href="#" className={styles.addInfo__info__link}>
            <h4 className={styles.addInfo__info__text}>
              {getNormalRating(rating)}
            </h4>
          </Link>
        </div>
      )}
      {studios.length !== 0 && (
        <div className={styles.addInfo__info}>
          <span className={styles.addInfo__info__label}>Студия:</span>
          {studios.map((el) => (
            <Link
              key={el.studio_id}
              href="#"
              className={styles.addInfo__info__link}
            >
              <h5 className={styles.addInfo__info__text}>{el.name}</h5>
            </Link>
          ))}
        </div>
      )}
      {dates.aired_on !== null && (
        <div
          className={`${styles.addInfo__info} ${styles.addInfo__info__nextEpisode}`}
          data-content={dates.released_on ? dateFormat(dates.released_on) : "?"}
        >
          <span className={styles.addInfo__info__label}>
            {status !== "anons" ? "Дата премьеры:" : "Дата выхода:"}
          </span>
          <h5 className={styles.addInfo__info__text}>
            {dateFormat(dates.aired_on)}
          </h5>
        </div>
      )}
      {videos.length !== 0 && (
        <div className={styles.addInfo__info}>
          <span className={styles.addInfo__info__label}>Трейлер:</span>
          {videos.map((el, index) => (
            <Link
              key={el}
              href={el}
              target="_blank"
              className={styles.addInfo__info__video}
            >
              Видео {index + 1}
              <AmyImage src={ARROW_RIGHT} width={20} height={20} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default OtherInfo
