import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { PosterAnime } from '@/supportingTool/types'
import { BISKY_POSTER_BLUR } from '@/theme/sources'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { getRating } from '@/supportingTool/functions'

import styles from './index.module.scss'

interface IPoster {
  el: PosterAnime;
  offBack?: boolean;
  offName?: boolean;
}

const Poster = ({ el, offBack, offName }: IPoster) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Link
      href="#"
      key={el.shiki_id}
      className={`${styles.poster} ${offBack && styles.poster_noShadow}`}
    >
      {!loaded && (
        <Image
          src={BISKY_POSTER_BLUR}
          fill
          alt=""
          className={styles.poster_blur}
        />
      )}
      <Image
        src={
          el.image
            ? SHIKI_URL + 'system/animes/original/' + el.image + '.jpg'
            : ''
        }
        quality={70}
        width={180}
        height={290}
        alt=""
        onLoad={() => setLoaded(true)}
        className={styles.poster_img}
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
