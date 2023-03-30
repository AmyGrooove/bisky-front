import Link from "next/link"
import { useContext } from "react"

import { AnimeInfoContext } from ".."

import styles from "./index.module.scss"

const Genres = () => {
  const { genres } = useContext(AnimeInfoContext)

  return (
    <div className={`${styles.addInfo__info} ${styles.addInfo__info__genres}`}>
      <span className={styles.addInfo__info__label}>Жанры:</span>
      <div className={styles.addInfo__info__genres__block}>
        {genres.map((el) => (
          <Link
            key={el.genre_id}
            href="#"
            className={styles.addInfo__info__genres_link}
          >
            <h4 className={styles.addInfo__info__genres_link_text}>
              {el.name.ru}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Genres
