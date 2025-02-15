import Link from 'next/link'

import { cn } from '@shared/utils/functions'
import { PlaceholderImage, Text } from '@shared/ui/atoms'

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
        width={60}
        height={60}
        className={st.avatar}
      />
      <Text size="16" weight="700">
        {data.username}
      </Text>
    </Link>
  )
}

export { AvatarElement }
