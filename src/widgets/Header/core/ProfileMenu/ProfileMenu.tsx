import Link from 'next/link'

import { cn } from '@shared/utils/functions'
import { CopyIcon, HourglassIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import { profileMenuLinks } from '../../static/profileMenuLinks'

import st from './ProfileMenu.module.scss'
import { useProfileMenu } from './useProfileMenu'

const ProfileMenu = () => {
  const {
    avatar,
    getReferenceProps,
    getFloatingProps,
    refs,
    isOpen,
    floatingStyles,
    username,
    isClosing,
    isTemporary,
    copyUsername,
    isLoading,
  } = useProfileMenu()

  return (
    <>
      <button
        ref={refs.setReference}
        className={cn(st.avatarButton, { [st.avatarButton_opened]: isOpen })}
        {...getReferenceProps()}
      >
        {isLoading ? (
          <Skeleton className={st.avatarSkeleton} />
        ) : (
          <PlaceholderImage
            src={avatar}
            className={st.avatar}
            sizes={[40, 40]}
          />
        )}
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn(st.menu, { [st.menu_hide]: isClosing })}
          {...getFloatingProps()}
        >
          {!isTemporary ? (
            <button className={st.usernameCopy} onClick={copyUsername}>
              <Text isCustomColor className={st.username}>
                {username}
              </Text>
              <CopyIcon className={st.usernameIcon} />
            </button>
          ) : (
            <Link
              href="/settings"
              className={cn(st.linkRow, st.linkRow_temporary)}
            >
              <Text weight="700" className={st.linkText}>
                Временный
              </Text>
              <HourglassIcon className={st.linkIcon} />
            </Link>
          )}
          <div className={st.divider} />
          {profileMenuLinks(username).map(({ href, name, Icon }) => (
            <Link key={href} href={href} className={st.linkRow}>
              <Text weight="700">{name}</Text>
              {Icon({ className: st.linkIcon })}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export { ProfileMenu }
