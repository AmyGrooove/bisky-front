import { Divider } from '@shared/ui/atoms/Divider'
import { InputField } from '@shared/ui/molecules/InputField'
import { Controller } from 'react-hook-form'
import { Button } from '@shared/ui/molecules/Button'
import { FileIcon, ImageIcon } from '@shared/icons'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { UploadField } from '@shared/ui/molecules/UploadField'
import { Fancybox } from '@shared/ui/atoms/Fancybox'
import { isNil } from '@shared/utils/functions'

import { IProfileTabProps } from '../types/IProfileTabProps'

import st from './ProfileTab.module.scss'
import { useProfileTab } from './useProfileTab'

const ProfileTab = (props: IProfileTabProps) => {
  const {
    control,
    isUpdateNicknameDisabled,
    isMobile,
    data,
    sendForm,
    setImageSrc,
    deleteAvatar,
    isDeleteAvatarPending,
    avatarVersion,
  } = useProfileTab(props)

  return (
    <>
      <div className={st.avatarWrapper}>
        <Fancybox>
          <PlaceholderImage
            src={data.avatar}
            alt="avatar"
            sizes={[100, 56]}
            className={st.avatar}
            version={avatarVersion}
          />
        </Fancybox>
        <UploadField
          variant={isMobile ? 'small' : 'big'}
          onChange={setImageSrc}
          accept=".png, .jpg, .jpeg .webp"
        />
      </div>
      {!isNil(data.avatar) && (
        <div className={st.submitButtonWrapper}>
          <Button
            isDisabled={isDeleteAvatarPending}
            onClick={() => deleteAvatar()}
            className={st.button}
            Icon={<ImageIcon />}
          >
            Удалить аватар
          </Button>
        </div>
      )}
      <Divider />
      <Controller
        control={control}
        name="nickname"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            className={st.input}
            label="Никнейм"
            errorText={fieldState.error?.message}
            placeholder="Новый никнейм"
          />
        )}
      />
      <div className={st.submitButtonWrapper}>
        <Button
          isDisabled={isUpdateNicknameDisabled}
          onClick={sendForm}
          className={st.button}
          Icon={<FileIcon />}
        >
          Сохранить
        </Button>
      </div>
    </>
  )
}

export { ProfileTab }
