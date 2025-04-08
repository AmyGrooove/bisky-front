import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Fancybox } from '@shared/ui/atoms/Fancybox'
import { Text } from '@shared/ui/atoms/Text'
import { GlassButton } from '@shared/ui/molecules/GlassButton'
import { SettingsIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { setModal } from '@widgets/ModalWrapper'
import { SettingsModal } from '@widgets/SettingsModal'

import { useUserHeader } from './useUserHeader'
import st from './UserHeader.module.scss'

const UserHeader = () => {
  const { avatar, username, convertedLastOnline, isCurrentUser } =
    useUserHeader()

  return (
    <div className={st.root}>
      <div className={st.profile}>
        <Fancybox>
          <a
            href={avatar ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            data-fancybox="gallery"
          >
            <PlaceholderImage
              src={avatar}
              sizes={[120, 80]}
              className={st.avatar}
            />
          </a>
        </Fancybox>
        <div>
          <Text weight="700" className={st.username}>
            {username}
          </Text>
          <Text className={st.lastOnline}>{convertedLastOnline}</Text>
        </div>
      </div>
      {isCurrentUser && (
        <GlassButton
          onClick={() => setModal(<SettingsModal />)}
          className={st.settings}
        >
          {SettingsIcon}
        </GlassButton>
      )}
      <Text weight="700" className={cn(st.lastOnline, st.lastOnline_mobile)}>
        {convertedLastOnline}
      </Text>
      <PlaceholderImage
        src={null}
        sizes={[1400, 400]}
        className={st.background}
      />
    </div>
  )
}

export { UserHeader }
