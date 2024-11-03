import { IUserAnimeStatsProps } from "../types/IUserAnimeStatsProps"

const useUserAnimeStats = (props: IUserAnimeStatsProps) => {
  const { userData } = props

  return { userData }
}

export { useUserAnimeStats }
