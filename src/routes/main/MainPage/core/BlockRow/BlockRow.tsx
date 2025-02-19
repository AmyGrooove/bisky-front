import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'
import { Label } from '@shared/ui/molecules/Label'

import { TBlockRowProps } from '../../types/TBlockRowProps'

import st from './BlockRow.module.scss'

const BlockRow = (props: TBlockRowProps) => {
  const { dataType, genreData } = props

  return {
    genre: () => {
      if (!genreData?.animes) return null

      const genreHref = `/genre/${genreData.genre._id}`

      return (
        <div className={st.animeRow}>
          <Label
            variant="big"
            className={st.label_big}
            href={genreHref}
            linkText="Смотреть все"
          >
            {genreData.genre.name}
          </Label>
          <Label
            variant="small"
            className={st.label_small}
            href={genreHref}
            linkText="Смотреть все"
          >
            {genreData.genre.name}
          </Label>
          <AnimeCardCarousel data={genreData.animes} watchAllHref={genreHref} />
        </div>
      )
    },
  }[dataType]()
}

export { BlockRow }
