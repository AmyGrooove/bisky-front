import { createContext } from 'react'

import { RusEngLabels } from '@/supportingTool/types'

import styles from './index.module.scss'
import useGenres from './index.use'
import GenreBlock from './GenreBlock'

interface IBest {
  data: RusEngLabels[];
}

export const GenresContext = createContext({ addNewBlock: () => {} })

const Genres = ({ data }: IBest) => {
  const { animeBlock, addNewBlock } = useGenres(data)

  return (
    <GenresContext.Provider value={{ addNewBlock }}>
      <section className={styles.genres}>
        {animeBlock.map((el) => (
          <GenreBlock key={el.en} genre={el} />
        ))}
      </section>
    </GenresContext.Provider>
  )
}

export default Genres
