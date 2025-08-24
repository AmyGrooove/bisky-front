import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'
import { cn } from '@shared/utils/functions'
import Link from 'next/link'

import { IAvatarElementProps } from '../types/IAvatarElementProps'

import { useAvatarElement } from './useAvatarElement'
import st from './AvatarElement.module.scss'

const AvatarElement = (props: IAvatarElementProps) => {
  const { variant, userData, className } = useAvatarElement(props)

  return (
    <Link
      href={`/profile/${userData?.slug}`}
      className={cn(st.root, className, st[`root_${variant}`])}
    >
      <PlaceholderImage
        src={userData?.avatar ?? null}
        sizes={[60, 40]}
        className={st.avatar}
      />
      <Text weight="700" className={st.nickname}>
        {userData?.nickname}
      </Text>
    </Link>
  )
}

export { AvatarElement }
