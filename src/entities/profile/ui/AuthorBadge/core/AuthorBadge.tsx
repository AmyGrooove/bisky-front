import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Text } from '@shared/ui/atoms/Text'

import { IAuthorBadgeProps } from '../types/IAuthorBadgeProps'

import { useAuthorBadge } from './useAuthorBadge'
import st from './AuthorBadge.module.scss'
import { cn } from '@shared/utils/functions'
import Link from 'next/link'

const AuthorBadge = (props: IAuthorBadgeProps) => {
  const { variant, userData, className, isCurrentUser } = useAuthorBadge(props)

  return (
    <Link
      href={`/profile/${userData?.slug}`}
      className={cn(st.root, className, st[`root_${variant}`], {
        [st.root_currentUser]: isCurrentUser,
      })}
    >
      <PlaceholderImage
        src={userData?.avatar ?? null}
        sizes={[40, 40]}
        className={st.avatar}
      />
      <Text weight={variant === 'big' ? '700' : '400'} className={st.nickname}>
        {userData?.nickname}
      </Text>
    </Link>
  )
}

export { AuthorBadge }
