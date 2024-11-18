import { useSession } from "next-auth/react"

import { IAnimeCardProps } from "../types/IAnimeCardProps"

const useAnimeCard = (props: IAnimeCardProps) => {
  const { anime, className, ...otherProps } = props

  const { data: session } = useSession()

  return { anime, className, otherProps, session }
}

export { useAnimeCard }
