import { RusEngLabels } from '@/supportingTool/types'
import PosterSlider from '@/components/Common/PosterSlider'

import useGenreBlock from './index.use'

interface IGenreBlock {
  genre: RusEngLabels;
}

const GenreBlock = ({ genre }: IGenreBlock) => {
  const { targetRef, animes } = useGenreBlock(genre.en ? genre.en : '')

  return (
    <div ref={targetRef}>
      <PosterSlider
        animes={animes}
        label={genre.ru || genre.en || ''}
        path={'/home/genres/anime?genre=' + genre.en}
        goToFull={{
          count: 12,
          url: '#',
        }}
      />
    </div>
  )
}

export default GenreBlock
