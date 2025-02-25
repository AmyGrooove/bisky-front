import { IGenreHeaderProps } from '../../types/IGenreHeaderProps'

const useGenreHeader = (props: IGenreHeaderProps) => {
  const { name, description } = props

  return { description, name }
}

export { useGenreHeader }
