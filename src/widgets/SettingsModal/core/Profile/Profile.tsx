import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Fancybox } from '@shared/ui/atoms/Fancybox'
import { UploadField } from '@shared/ui/molecules/UploadField'
import { InputField } from '@shared/ui/atoms/InputField'
import { Button } from '@shared/ui/molecules/Button'
import { Controller } from 'react-hook-form'
import { FileIcon } from '@shared/icons'

import { LoadingSettings } from '../LoadingSettings/LoadingSettings'

import { useProfile } from './useProfile'
import st from './Profile.module.scss'

const Profile = () => {
  const { user, isLoading, setImageSrc, control, sendForm, isDisabled } =
    useProfile()

  if (isLoading) return <LoadingSettings />

  return (
    <div className={st.root}>
      <div className={st.avatarBlock}>
        <Fancybox className={st.desktopPoster}>
          <a
            href={user?.avatar ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            data-fancybox="gallery"
          >
            <PlaceholderImage
              className={st.avatar}
              src={user?.avatar ?? null}
              sizes={[100, 100]}
            />
          </a>
        </Fancybox>
        <UploadField onChange={setImageSrc} accept=".png, .jpg, .jpeg .webp" />
      </div>
      <div className={st.separator} />
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            className={st.input}
            label="Никнейм"
            errorText={fieldState.error?.message}
            placeholder="Username"
          />
        )}
      />
      <div className={st.saveWrapper}>
        <Button
          className={st.button}
          variant="big"
          Icon={FileIcon}
          onClick={sendForm}
          isDisabled={isDisabled}
        >
          Сохранить
        </Button>
      </div>
    </div>
  )
}

export { Profile }
