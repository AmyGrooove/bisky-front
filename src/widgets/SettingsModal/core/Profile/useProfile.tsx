import { useSession } from '@entities/auth/hooks/useSession'
import { CropImage } from '@shared/ui/organisms/CropImage'
import { isNil } from '@shared/utils/functions'
import {
  $additionalModal,
  closeAdditionalModal,
  setAdditionalModal,
} from '@widgets/ModalWrapper'
import { useEffect, useState } from 'react'
import st from './Profile.module.scss'
import { useUnit } from 'effector-react'
import { useSetAvatar } from '@entities/user/api/setAvatar'

const useProfile = () => {
  const { user, isLoading } = useSession()

  const { mutateAsync: updateAvatar, isPending } = useSetAvatar()

  const additionalModal = useUnit($additionalModal)

  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const handleUpdateAvatar = async (value: FormData) => {
    if (isPending) return

    updateAvatar(value)
  }

  const closeCropModule = () => {
    setImageSrc(null)
    closeAdditionalModal()
  }

  useEffect(() => {
    if (!isNil(imageSrc))
      setAdditionalModal(
        <CropImage
          value={imageSrc}
          closeFunction={closeCropModule}
          pointClassName={st.avatarCrop}
          uploadFunction={handleUpdateAvatar}
        />,
      )
  }, [imageSrc])

  useEffect(() => {
    if (!isNil(imageSrc) && isNil(additionalModal)) setImageSrc(null)
  }, [additionalModal, imageSrc])

  return { user, isLoading, setImageSrc }
}

export { useProfile }
