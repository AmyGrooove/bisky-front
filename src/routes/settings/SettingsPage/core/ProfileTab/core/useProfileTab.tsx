import { useUpdateNickname } from '@entities/account/api/updateNickname'
import { useUpdateAvatar } from '@entities/profile/api/updateAvatar'
import { useDeleteAvatar } from '@entities/profile/api/deleteAvatar'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { useEffect, useState } from 'react'
import { CropImage } from '@shared/ui/organisms/CropImage'
import { isNil } from '@shared/utils/functions'
import {
  $additionalModal,
  closeAdditionalModal,
  setAdditionalModal,
} from '@widgets/ModalWrapper'
import { useUnit } from 'effector-react'

import { profileSchema } from '../schemas/profileSchema'
import { IProfileTabProps } from '../types/IProfileTabProps'

import st from './ProfileTab.module.scss'

const useProfileTab = (props: IProfileTabProps) => {
  const { data } = props

  const { isMobile } = useIsMobile()

  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [avatarVersion, setAvatarVersion] = useState(0)

  const {
    control,
    watch,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    mode: 'all',
    defaultValues: { nickname: data?.nickname ?? '' },
  })

  const additionalModal = useUnit($additionalModal)

  const { mutateAsync: updateNickname, isPending: isUpdateNicknamePending } =
    useUpdateNickname()
  const { mutateAsync: updateAvatar, isPending: isUpdateAvatarPending } =
    useUpdateAvatar()
  const { mutateAsync: deleteAvatar, isPending: isDeleteAvatarPending } =
    useDeleteAvatar()

  const isUpdateNicknameDisabled =
    data.nickname === watch('nickname') || !isValid || !isDirty

  const sendForm = async () => {
    if (isUpdateNicknamePending) return

    const newNickname = getValues('nickname')

    await updateNickname({ nickname: newNickname })
  }

  const handleUpdateAvatar = async (value: FormData) => {
    if (isUpdateAvatarPending) return

    await updateAvatar({ file: value })
    setAvatarVersion((prevValue) => prevValue + 1)
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

  return {
    control,
    isUpdateNicknameDisabled,
    isMobile,
    data,
    setImageSrc,
    sendForm,
    deleteAvatar,
    isDeleteAvatarPending,
    avatarVersion,
  }
}

export { useProfileTab }
