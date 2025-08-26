import { ESTIMATE_DATA } from '@entities/anime/static/ESTIMATE_DATA'

import { IEstimateButtonProps } from '../types/IEstimateButtonProps'

const useEstimateButton = (props: IEstimateButtonProps) => {
  const {
    listStatus,
    className,
    isDisabled = false,
    type = 'BigButton',
    variant = 'big',
    onClick,
  } = props

  const currentEstimateData = ESTIMATE_DATA[listStatus]

  return {
    className,
    currentEstimateData,
    isDisabled,
    listStatus,
    type,
    variant,
    onClick,
  }
}

export { useEstimateButton }
