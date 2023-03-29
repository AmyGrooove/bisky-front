import { createContext } from 'react'

import { IAllGenres } from '@/supportingTool/types'
import BlockLabel from '@/components/Common/BlockLabel'

import styles from './index.module.scss'
import useGenres from './index.use'
import GenreBlock from './GenreBlock'

interface IBest {
  data: IAllGenres[];
}

const Genres = ({ data }: IBest) => {
  const { animeBlock, addNewBlock, allGenres, genreBlockRef } = useGenres(data)

  return (
    <section className={styles.genres}>
      <BlockLabel
        label="Жанры" href="#"
        leftPadding />
      {animeBlock.map((el, index) => (
        <div
          key={el.genre_id}
          ref={genreBlockRef}
          style={{ zIndex: animeBlock.length - index, position: 'relative' }}
        >
          <GenreBlock genre={el} />
        </div>
      ))}
      <div className={styles.genres__allGenres}>
        {allGenres.map((el, index) => (
          <button key={el.genre_id} onClick={() => addNewBlock(index)}>
            {el.name.ru}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Genres
