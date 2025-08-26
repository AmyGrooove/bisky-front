import Link from 'next/link'
import { cn } from '@shared/utils/functions'
import { CopyIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { FloatingPortal } from '@floating-ui/react'
import { Divider } from '@shared/ui/atoms/Divider'

import st from './ProfileMenu.module.scss'
import { useProfileMenu } from './useProfileMenu'

const ProfileMenu = () => {
  const {
    avatar,
    getReferenceProps,
    getFloatingProps,
    refs,
    floatingStyles,
    nickname,
    copyUsername,
    isSessionLoading,
    toggle,
    transitionStyles,
    isMounted,
    links,
  } = useProfileMenu()

  return (
    <>
      <div {...getReferenceProps()} ref={refs.setReference}>
        <button
          className={cn(st.avatarButton, {
            [st.avatarButton_opened]: isMounted,
          })}
          aria-label="Меню профиля"
          aria-haspopup="menu"
          aria-expanded={isMounted}
        >
          {isSessionLoading ? (
            <Skeleton className={st.avatarSkeleton} />
          ) : (
            <PlaceholderImage
              src={avatar}
              className={st.avatar}
              sizes={[40, 40]}
              alt={nickname ?? 'Аватар'}
            />
          )}
        </button>
      </div>
      {isMounted && (
        <FloatingPortal>
          <div
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...transitionStyles }}
            className={st.menu}
            role="menu"
          >
            <button
              className={st.usernameCopy}
              onClick={copyUsername}
              aria-label="Скопировать имя пользователя"
            >
              <Text className={st.username}>{nickname}</Text>
              <CopyIcon className={st.usernameIcon} />
            </button>
            <Divider />
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={st.linkRow}
                onClick={() => toggle(false)}
              >
                <Text weight="700">{link.name}</Text>
                <link.Icon className={st.linkIcon} />
              </Link>
            ))}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

export { ProfileMenu }
