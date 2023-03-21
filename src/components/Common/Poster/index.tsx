import Link from 'next/link'

import { IPosterAnime } from '@/supportingTool/types'
import { getRating } from '@/supportingTool/functions'

import AmyImage from '../AmyImage'

import styles from './index.module.scss'

interface IPoster {
  el: IPosterAnime;
  offBack?: boolean;
}

const Poster = ({ el, offBack }: IPoster) => {
  return (
    <Link
      href={'anime/' + el.shiki_id}
      key={el.shiki_id}
      className={`${styles.poster} ${offBack && styles.poster_noShadow}`}
    >
      <AmyImage
        src={el.poster}
        width={180}
        height={290}
        imageType="poster"
        quality={70}
        className={styles.poster_img}
      />
      <div
        className={`${styles.poster__label} ${
          offBack && styles.poster__label_noShadow
        }`}
      >
        <h3 className={styles.poster__label_text}>{el.labels[0]}</h3>
      </div>
      <span className={styles.poster__rating}>
        <span
          className={`${styles.poster__rating_score} ${getRating(
            el.scores[0],
          )}`}
        >
          {el.scores[0]}
        </span>
      </span>
      {el.status !== 'released' && (
        <span className={styles.poster__status}>
          <span
            className={`${styles.poster__status_type} ${
              el.status && el.status.toLocaleLowerCase()
            }`}
          >
            {el.status}
          </span>
        </span>
      )}
    </Link>
  )
}

export default Poster
