import { IGenreSectionProps } from '../../types/IGenreSectionProps'

const useGenreHeader = (props: IGenreSectionProps) => {
  const {
    data: {
      genre: { description, name },
    },
  } = props

  return { description, name }
}

export { useGenreHeader }
