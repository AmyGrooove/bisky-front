import Link from 'next/link'

import { PosterAnime } from '@/supportingTool/types'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { getRating } from '@/supportingTool/functions'
import { BLUR_POSTER } from '@/theme/sources'

import AmyImage from '../AmyImage'

import styles from './index.module.scss'

interface IPoster {
  el: PosterAnime;
  offBack?: boolean;
  offName?: boolean;
}

const Poster = ({ el, offBack, offName }: IPoster) => {
  return (
    <Link
      href="#"
      key={el.shiki_id}
      className={`${styles.poster} ${offBack && styles.poster_noShadow}`}
    >
      <AmyImage
        src={
          el.image
            ? SHIKI_URL + 'system/animes/original/' + el.image + '.jpg'
            : ''
        }
        quality={70}
        width={180}
        height={290}
        alt=""
        className={styles.poster_img}
        backSrc={BLUR_POSTER}
      />
      {!offName && (
        <div className={styles.poster__label}>
          <h2 className={styles.poster__label_text}>
            {el.label !== undefined ? el.label.ru : ''}
          </h2>
        </div>
      )}
      <span className={styles.poster__rating}>
        <h3 className={`${styles.poster__rating_score} ${getRating(el.score)}`}>
          {el.score}
        </h3>
      </span>
      {el.status !== 'released' && (
        <span className={styles.poster__status}>
          <h3
            className={`${styles.poster__status_type} ${
              el.status && el.status.toLocaleLowerCase()
            }`}
          >
            {el.status}
          </h3>
        </span>
      )}
    </Link>
  )
}

export default Poster
