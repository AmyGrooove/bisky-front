import { IAdditionalInfoProps } from "../types/IAdditionalInfoProps"

const useAdditionalInfo = (props: IAdditionalInfoProps) => {
  const { animeData, className, ...otherProps } = props

  return { animeData, className, otherProps }
}

export { useAdditionalInfo }
