import { IAllGenres } from "@/supportingTool/types"
import BlockLabel from "@/components/Common/BlockLabel"

import styles from "./index.module.scss"
import useGenres from "./index.use"
import GenreBlock from "./GenreBlock"

interface IBest {
  data: IAllGenres[]
}

const Genres = ({ data }: IBest) => {
  const { animeBlock, addNewBlock, allGenres, genreBlockRef } = useGenres(data)

  return (
    <section className={styles.genres}>
      <BlockLabel label="Жанры" href="#" slider />
      {animeBlock.map((el, index) => (
        <div
          key={el.genre_id}
          ref={genreBlockRef}
          className={styles.genres__block}
          style={{
            zIndex: animeBlock.length - index,
            marginTop: index === 0 ? 0 : 20,
          }}
        >
          <GenreBlock genre={el} />
        </div>
      ))}
      <div className={styles.genres__allGenres}>
        {allGenres.map((el, index) => (
          <button
            className={styles.genres__allGenres__button}
            key={el.genre_id}
            onClick={() => addNewBlock(index)}
          >
            {el.name.ru}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Genres
