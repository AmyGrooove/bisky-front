import { useContext } from "react"

import styles from "./index.module.scss"

import { AnimeInfoContext } from "."

const Label = () => {
  const { labels } = useContext(AnimeInfoContext)

  return (
    <div className={styles.label}>
      <h1 className={styles.label__main}>{labels[0]}</h1>
      <h2 className={styles.label__sub}>{labels[1]}</h2>
      <div className={styles.label__all}>
        <span className={styles.label__all__label}>Все названия</span>
        <div className={styles.label__all__block}>
          {labels.map((el) => (
            <h3 key={el} className={styles.label__all__block__text}>
              {el}
            </h3>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Label
