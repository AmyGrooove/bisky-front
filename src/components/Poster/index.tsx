import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, useEffect, useRef } from 'react'

import { PosterAnime } from '@/supportingTool/types'
import { BISKY_POSTER_BLUR } from '@/theme/sources'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { getRating } from '@/supportingTool/functions'

import styles from './index.module.scss'

interface IPoster {
  el: PosterAnime;
  offBack?: boolean;
}

const Poster = ({ el, offBack }: IPoster) => {
  return (
    <Link
      href="#"
      key={el.shiki_id}
      className={`${styles.poster} ${offBack && styles.poster_noShadow}`}
    >
      <Image
        src={
          el.image
            ? SHIKI_URL + 'system/animes/original/' + el.image + '.jpg'
            : ''
        }
        placeholder="blur"
        quality={70}
        blurDataURL={BISKY_POSTER_BLUR}
        width={180}
        height={290}
        alt=""
        className={styles.poster_img}
      />
      <h2 className={styles.poster_label}>{el.label.ru}</h2>
      <span className={styles.poster__rating}>
        <h3 className={`${styles.poster__rating_score} ${getRating(el.score)}`}>
          {el.score}
        </h3>
      </span>
    </Link>
  )
}

export default Poster
