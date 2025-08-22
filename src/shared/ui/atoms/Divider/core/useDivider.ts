import { IDividerProps } from '../types/IDividerProps'

const useDivider = (props: IDividerProps) => {
  const { variant = 'horizontal', className } = props

  return { variant, className }
}

export { useDivider }
