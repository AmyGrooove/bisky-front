import Link from "next/link"

import { getRating } from "@/supportingTool/functions"
import useWindowSize from "@/supportingTool/functions/useWindowSize"

import AmyImage from "../AmyImage"

import styles from "./index.module.scss"

interface IPoster {
  shiki_id: number
  poster: string | null
  label?: string
  scores?: number
  status?: "released" | "ongoing" | "anons"
}

const Poster = ({ shiki_id, poster, label, scores, status }: IPoster) => {
  const { mobile } = useWindowSize()

  return (
    <>
      {label ? (
        <Link
          href={"/anime/" + shiki_id}
          className={`${styles.poster} ${label && styles.poster__hover}`}
        >
          <div>
            <AmyImage
              src={poster}
              width={mobile ? 170 : 180}
              height={mobile ? 280 : 290}
              imageType="poster"
              quality={70}
              className={styles.poster_img}
            />
            {label && (
              <div className={styles.poster__label}>
                <h3 className={styles.poster__label_text}>{label}</h3>
              </div>
            )}
            {scores && scores !== 0 && (
              <span className={styles.poster__rating}>
                <span
                  className={`${styles.poster__rating_score} ${getRating(
                    scores,
                  )}`}
                >
                  {scores}
                </span>
              </span>
            )}
            {status && status !== "released" && (
              <span className={styles.poster__status}>
                <span
                  className={`${
                    styles.poster__status_type
                  } ${status.toLocaleLowerCase()}`}
                >
                  {status}
                </span>
              </span>
            )}
          </div>
        </Link>
      ) : (
        <AmyImage
          src={poster}
          width={mobile ? 170 : 180}
          height={mobile ? 280 : 290}
          imageType="poster"
          quality={70}
          className={styles.poster_img}
        />
      )}
    </>
  )
}

export default Poster
