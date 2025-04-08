import Link from 'next/link'
import { cn, isNil } from '@shared/utils/functions'
import { CopyIcon, HourglassIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { setModal } from '@widgets/ModalWrapper'
import { SettingsModal } from '@widgets/SettingsModal'

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
    toggle,
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
            <div
              onClick={() => setModal(<SettingsModal defaultActiveTab={0} />)}
              className={cn(st.linkRow, st.linkRow_temporary)}
            >
              <Text weight="700" className={st.linkText}>
                Временный
              </Text>
              <HourglassIcon className={st.linkIcon} />
            </div>
          )}
          <div className={st.divider} />
          {profileMenuLinks(username).map(({ href, name, Icon, onClick }) =>
            !isNil(onClick) ? (
              <div
                key={name}
                className={st.linkRow}
                onClick={() => {
                  onClick()
                  toggle(false)
                }}
              >
                <Text weight="700">{name}</Text>
                {Icon({ className: st.linkIcon })}
              </div>
            ) : (
              <Link
                key={name}
                href={href ?? ''}
                className={st.linkRow}
                onClick={() => toggle(false)}
              >
                <Text weight="700">{name}</Text>
                {Icon({ className: st.linkIcon })}
              </Link>
            ),
          )}
        </div>
      )}
    </>
  )
}

export { ProfileMenu }
