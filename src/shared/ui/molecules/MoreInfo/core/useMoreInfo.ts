import { IMoreInfoProps } from '../types/IMoreInfoProps'

const useMoreInfo = (props: IMoreInfoProps) => {
  const { children, label = 'развернуть', className, variant = 'big' } = props

  return { children, label, className, variant }
}

export { useMoreInfo }
