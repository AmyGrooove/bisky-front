import Link from 'next/link'
import { cloneElement } from 'react'

import { PlaceholderImage, Text } from '@shared/ui/atoms'
import { cn } from '@shared/utils/functions'
import { CopyIcon, HourglassIcon } from '@shared/icons'

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
  } = useProfileMenu()

  return (
    <>
      <button
        ref={refs.setReference}
        className={cn(st.avatarButton, { [st.avatarButton_opened]: isOpen })}
        {...getReferenceProps()}
      >
        <PlaceholderImage
          src={avatar}
          width={40}
          height={40}
          className={st.avatar}
        />
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
          {profileMenuLinks(username).map((link) => (
            <Link key={link.href} href={link.href} className={st.linkRow}>
              <Text weight="700">{link.name}</Text>
              {cloneElement(link.icon, { className: st.linkIcon })}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export { ProfileMenu }
