import Link from "next/link"

import AmyImage from "@/components/Common/AmyImage"
import { getRating, getSrc } from "@/supportingTool/functions"
import { ISeasonalAnime } from "@/supportingTool/types"

import styles from "./index.module.scss"
import useSeasonal from "./index.use"

interface IOneSlide {
  el: ISeasonalAnime
}

const OneSlide = ({ el }: IOneSlide) => {
  const { currentIndex, errSrc } = useSeasonal(el.screenshots)

  return (
    <Link
      href={"anime/" + el.shiki_id}
      className={styles.oneSlide}
      style={{
        backgroundImage: `url(${getSrc(
          el.screenshots[currentIndex],
          "screenshot",
          errSrc,
        )})`,
      }}
    >
      <div className={styles.oneSlide__main}>
        <AmyImage
          src={el.poster}
          height={335}
          width={225}
          imageType="poster"
          quality={70}
          className={styles.oneSlide__main_img}
        />
        <div className={styles.oneSlide__main_label}>{el.labels[0]}</div>
      </div>
      <span className={`${styles.oneSlide__score} ${getRating(el.scores[0])}`}>
        {el.scores[0]}
      </span>
      <ul className={styles.oneSlide__genres}>
        {el.genres.map((item) => (
          <li key={item.genre_id} className={styles.oneSlide__genres_text}>
            {item.name.ru}
          </li>
        ))}
      </ul>
    </Link>
  )
}

export default OneSlide
