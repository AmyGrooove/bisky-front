import { IAvatarElementProps } from '../types/IAvatarElementProps'

const useAvatarElement = (props: IAvatarElementProps) => {
  const { userData, variant = 'big', className } = props

  return { variant, userData, className }
}

export { useAvatarElement }
