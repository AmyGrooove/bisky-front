import { createContext } from 'react'

import { IAllGenres } from '@/supportingTool/types'

import styles from './index.module.scss'
import useGenres from './index.use'
import GenreBlock from './GenreBlock'

interface IBest {
  data: IAllGenres[];
}

export const GenresContext = createContext({ addNewBlock: () => {} })

const Genres = ({ data }: IBest) => {
  const { animeBlock, addNewBlock } = useGenres(data)

  return (
    <GenresContext.Provider value={{ addNewBlock }}>
      <section className={styles.genres}>
        {animeBlock.map((el) => (
          <GenreBlock key={el.genre_id} genre={el} />
        ))}
      </section>
    </GenresContext.Provider>
  )
}

export default Genres
