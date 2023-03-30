import Link from "next/link"

import { getRating } from "@/supportingTool/functions"

import AmyImage from "../AmyImage"

import styles from "./index.module.scss"

interface IPoster {
  shiki_id: number
  poster: string | null
  labels: string
  scores: number
  status: "released" | "ongoing" | "anons"
}

const Poster = ({ shiki_id, poster, labels, scores, status }: IPoster) => {
  return (
    <Link href={"/anime/" + shiki_id} className={styles.poster}>
      <div>
        <AmyImage
          src={poster}
          width={180}
          height={290}
          imageType="poster"
          quality={70}
          className={styles.poster_img}
        />
        <div className={styles.poster__label}>
          <h3 className={styles.poster__label_text}>{labels}</h3>
        </div>
        {scores !== 0 && (
          <span className={styles.poster__rating}>
            <span
              className={`${styles.poster__rating_score} ${getRating(scores)}`}
            >
              {scores}
            </span>
          </span>
        )}
        {status !== "released" && (
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
  )
}

export default Poster
