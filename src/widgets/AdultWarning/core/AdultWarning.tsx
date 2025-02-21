'use client'

import { IAdultWarningProps } from '../types/IAdultWarningProps'
import { useAdultWarning } from './useAdultWarning'

const AdultWarning = (props: IAdultWarningProps) => {
  useAdultWarning(props)

  return null
}

export { AdultWarning }
