import { IAnimeMiniInfoProps } from "../types/IAnimeMiniInfoProps"

const useAnimeMiniInfo = (props: IAnimeMiniInfoProps) => {
  const { animeData } = props

  return { animeData }
}

export { useAnimeMiniInfo }
