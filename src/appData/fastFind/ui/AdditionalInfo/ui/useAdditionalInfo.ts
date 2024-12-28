import { IAdditionalInfoProps } from "../types/IAdditionalInfoProps"

const useAdditionalInfo = (props: IAdditionalInfoProps) => {
  const { currentAnime } = props

  return { currentAnime }
}

export { useAdditionalInfo }
