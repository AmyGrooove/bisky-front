import PosterSlider from '@/components/Common/PosterSlider'
import { IAllGenres } from '@/supportingTool/types'
import BlockLabel from '@/components/Common/BlockLabel'

import useGenreBlock from './index.use'

interface IGenreBlock {
  genre: IAllGenres;
  zIndex: number;
}

const GenreBlock = ({ genre, zIndex }: IGenreBlock) => {
  const { animes } = useGenreBlock(genre.genre_id)

  return (
    <div style={{ zIndex: zIndex, position: 'relative' }}>
      <BlockLabel
        label={genre.name.ru} href="#"
        leftPadding downgrade />
      <PosterSlider
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
