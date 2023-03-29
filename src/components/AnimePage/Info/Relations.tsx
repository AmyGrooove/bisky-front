import { useContext } from 'react'

import PosterSlider from '@/components/Common/PosterSlider'

import styles from './index.module.scss'

import { AnimeInfoContext } from '.'

const Relations = () => {
  const { relations } = useContext(AnimeInfoContext)

  return (
    <div className={styles.relations}>
      <h4 className={styles.relations__label}>Связанное</h4>
      <PosterSlider data={relations.animes.map((el) => el.link)} />
    </div>
  )
}

export default Relations
