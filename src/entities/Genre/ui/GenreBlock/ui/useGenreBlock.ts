import { IGenreBlockProps } from "../types/IGenreBlockProps"

const useGenreBlock = (props: IGenreBlockProps) => {
  const { genre, className, ...otherProps } = props

  return { genre, className, otherProps }
}

export { useGenreBlock }
