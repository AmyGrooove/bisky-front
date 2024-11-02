import { IAnimeCardProps } from "../types/IAnimeCardProps"

const useAnimeCard = (props: IAnimeCardProps) => {
  const { anime, className, ...otherProps } = props

  return { anime, className, otherProps }
}

export { useAnimeCard }
