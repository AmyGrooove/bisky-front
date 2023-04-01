import PosterSlider from "@/components/Common/PosterSlider"
import { IAllGenres } from "@/supportingTool/types"
import BlockLabel from "@/components/Common/BlockLabel"

import useGenreBlock from "./index.use"

interface IGenreBlock {
  genre: IAllGenres
}

const GenreBlock = ({ genre }: IGenreBlock) => {
  const { animes } = useGenreBlock(genre.genre_id)

  return (
    <>
      <BlockLabel label={genre.name.ru} href="#" slider h3 />
      <PosterSlider
        data={animes}
        path={"/home/genres/anime?genre=" + genre.genre_id}
        goToFull="#"
      />
    </>
  )
}

export default GenreBlock
