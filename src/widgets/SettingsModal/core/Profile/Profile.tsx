import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import st from './Profile.module.scss'
import { useProfile } from './useProfile'
import { Fancybox } from '@shared/ui/atoms/Fancybox'
import { UploadField } from '@shared/ui/molecules/UploadField'

const Profile = () => {
  const { user, isLoading, setImageSrc } = useProfile()

  if (isLoading) return <div>loading</div>

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
      <div></div>
    </div>
  )
}

export { Profile }
