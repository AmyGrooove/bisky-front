import { excludeGenres, genresPageStyles as st } from "@appData/genres"
import { getAllGenresData } from "@appData/genres/api"
import { GenreBlock } from "@entities/Genre"

const GenresPage = async () => {
  const genresData = await getAllGenresData()

  return (
    <div className={st.root}>
      {genresData
        .filter((item) => !excludeGenres.includes(item._id))
        .map((item) => (
          <GenreBlock key={item._id} genre={item} />
        ))}
    </div>
  )
}

export default GenresPage
