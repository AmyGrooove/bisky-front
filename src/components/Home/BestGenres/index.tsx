import { createContext } from 'react'

import { RusEngLabels } from '@/supportingTool/types'

import styles from './index.module.scss'
import useBestGenres from './index.use'
import GenreBlock from './GenreBlock'


interface IBest {
  data: RusEngLabels[];
}

export const BestGenresContext = createContext({ addNewBlock: () => {} })

const BestGenres = ({ data }: IBest) => {
  const { animeBlock, addNewBlock } = useBestGenres(data)

  return (
    <BestGenresContext.Provider value={{ addNewBlock }}>
      <section className={styles.bestGenres}>
        {animeBlock.map((el) => (
          <GenreBlock key={el.en} genre={el} />
        ))}
      </section>
    </BestGenresContext.Provider>
  )
}

export default BestGenres
