import { HOME_TIP_DATA } from '../static/HOME_TIP_DATA'
import { IHomeTipProps } from '../types/IHomeTipProps'

const useHomeTip = (props: IHomeTipProps) => {
  const { type, variant = 'big', className } = props

  const currentData = HOME_TIP_DATA[type]

  return { variant, className, currentData }
}

export { useHomeTip }
