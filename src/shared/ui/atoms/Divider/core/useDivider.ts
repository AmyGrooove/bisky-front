import { IDividerProps } from '../types/IDividerProps'

const useDivider = (props: IDividerProps) => {
  const { variant = 'horizontal', className, children } = props

  return { variant, className, children }
}

export { useDivider }
