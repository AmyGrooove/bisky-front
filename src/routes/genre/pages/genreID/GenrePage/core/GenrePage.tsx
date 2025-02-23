import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { IGenrePageProps } from '../types/IGenrePageProps'
import { GenreHeader } from './GenreHeader/GenreHeader'
import st from './GenrePage.module.scss'
import { getAnimesByGenre } from '@entities/genre/api'
import { AnimeCards } from './AnimeCards/AnimeCards'

const GenrePage = async (props: IGenrePageProps) => {
  const { genreID } = await props.params

  const genreData = await getAnimesByGenre(genreID)

  return (
    <>
      <SectionLabel className={st.sectionLabel}>
        {genreData.genre.name}
      </SectionLabel>
      <GenreHeader data={genreData} />
      <AnimeCards data={genreData} />
      <div className={st.barMargin} />
    </>
  )
}

export { GenrePage }
