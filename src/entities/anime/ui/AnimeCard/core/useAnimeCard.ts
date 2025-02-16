import { IAnimeCardProps } from '../types/IAnimeCardProps'

const useAnimeCard = (props: IAnimeCardProps) => {
  const { data, className, variant = 'big' } = props
  const { _id, poster, label, relation, score, currentUserScore } = data

  const animeHref = `/anime/${_id}`

  const isBigVariant = variant === 'big'

  return {
    className,
    variant,
    animeHref,
    isBigVariant,
    poster,
    label,
    relation,
    score,
    currentUserScore,
    _id,
  }
}

export { useAnimeCard }
