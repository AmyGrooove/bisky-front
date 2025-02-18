import { IAnimeCardProps } from '../types/IAnimeCardProps'

const useAnimeCard = (props: IAnimeCardProps) => {
  const { data, className } = props
  const { _id, poster, label, relation, score, currentUserScore } = data

  const animeHref = `/anime/${_id}`

  return {
    className,
    animeHref,
    poster,
    label,
    relation,
    score,
    currentUserScore,
    _id,
  }
}

export { useAnimeCard }
