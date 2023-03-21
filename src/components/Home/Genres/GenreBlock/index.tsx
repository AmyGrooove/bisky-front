import PosterSliderBlock from '@/components/Common/PosterSliderBlock'
import { IAllGenres } from '@/supportingTool/types'

import useGenreBlock from './index.use'

interface IGenreBlock {
  genre: IAllGenres;
}

const GenreBlock = ({ genre }: IGenreBlock) => {
  const { targetRef, animes } = useGenreBlock(genre.genre_id)

  return (
    <div ref={targetRef}>
      <PosterSliderBlock
        label={genre.name.ru}
        data={animes}
        options={{
          path: '/home/genres/anime?genre=' + genre.genre_id,
          goToFull: '#',
        }}
      />
    </div>
  )
}

export default GenreBlock
