import { IAvatarElementProps } from '../types/IAvatarElementProps'

const useAvatarElement = (props: IAvatarElementProps) => {
  const { data, variant = 'big', className } = props

  const userHref = `/user/${data.username}`

  return {
    data,
    variant,
    className,
    userHref,
  }
}

export { useAvatarElement }
