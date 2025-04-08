import Link from 'next/link'
import { cn } from '@shared/utils/functions'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'

import { IAvatarElementProps } from '../types/IAvatarElementProps'

import st from './AvatarElement.module.scss'
import { useAvatarElement } from './useAvatarElement'

const AvatarElement = (props: IAvatarElementProps) => {
  const { data, variant, className, userHref } = useAvatarElement(props)

  return (
    <Link
      href={userHref}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <PlaceholderImage
        src={data.avatar}
        className={st.avatar}
        sizes={[60, 60]}
      />
      <Text weight="700">{data.username}</Text>
    </Link>
  )
}

export { AvatarElement }
