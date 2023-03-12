import { RusEngLabels } from '@/supportingTool/types'
import PosterSliderBlock from '@/components/Common/PosterSliderBlock'

import useGenreBlock from './index.use'

interface IGenreBlock {
  genre: RusEngLabels;
}

const GenreBlock = ({ genre }: IGenreBlock) => {
  const { targetRef, animes } = useGenreBlock(genre.en ? genre.en : '')

  return (
    <div ref={targetRef}>
      <PosterSliderBlock
        label={genre.ru || genre.en || ''}
        data={animes}
        options={{
          path: '/home/genres/anime?genre=' + genre.en,
          goToFull: '#',
        }}
      />
    </div>
  )
}

export default GenreBlock
