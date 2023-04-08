import PosterSlider from "@/components/Common/PosterSlider"
import { IAllGenres } from "@/supportingTool/types"
import BlockLabel from "@/components/Common/BlockLabel"

interface IGenreBlock {
  genre: IAllGenres
}

const GenreBlock = ({ genre }: IGenreBlock) => {
  return (
    <>
      <BlockLabel label={genre.name.ru} href="#" slider h3 />
      <PosterSlider
        path={"/home/genres/anime?genre=" + genre.genre_id}
        goToFull="#"
      />
    </>
  )
}

export default GenreBlock
