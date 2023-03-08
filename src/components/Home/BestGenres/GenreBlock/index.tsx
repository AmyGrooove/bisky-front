import Link from 'next/link'

import { RusEngLabels } from '@/supportingTool/types'
import Poster from '@/components/Common/Poster'

import styles from './index.module.scss'
import useGenreBlock from './index.use'

interface IGenreBlock {
  genre: RusEngLabels;
}

const GenreBlock = ({ genre }: IGenreBlock) => {
  const { targetRef, ShowNewPage, animes } = useGenreBlock(
    genre.en ? genre.en : '',
  )

  return (
    <div ref={targetRef} className={styles.best__block}>
      <Link href="#">
        <h1 className={styles.best__label}>{genre.ru}</h1>
      </Link>
      <div className={styles.best__table}>
        {animes.map((el) => (
          <Poster key={el.shiki_id} el={el} />
        ))}
      </div>
      <button className={styles.best__button} onClick={ShowNewPage}>
        Загрузить больше
      </button>
    </div>
  )
}

export default GenreBlock
