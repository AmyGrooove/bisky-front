import { useSession } from '@entities/auth/hooks/useSession'
import { CropImage } from '@shared/ui/organisms/CropImage'
import { isNil } from '@shared/utils/functions'
import {
  $additionalModal,
  closeAdditionalModal,
  setAdditionalModal,
} from '@widgets/ModalWrapper'
import { useEffect, useState } from 'react'
import { useUnit } from 'effector-react'
import { useSetAvatar } from '@entities/user/api/setAvatar'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useUpdateUsername } from '@entities/user/api/updateUsername'

import { profileSchema } from '../../schemas/profileSchema'

import st from './Profile.module.scss'

const useProfile = () => {
  const { user, isLoading } = useSession()

  const {
    control,
    watch,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    mode: 'all',
    defaultValues: { username: user?.username ?? '' },
  })

  const { mutateAsync: updateUsername, isPending: isUpdateUsernamePending } =
    useUpdateUsername()
  const { mutateAsync: updateAvatar, isPending: isUpdateAvatarPending } =
    useSetAvatar()

  const sendForm = async () => {
    if (isUpdateUsernamePending) return

    const data = getValues()

    await updateUsername({ username: data.username })
  }

  const additionalModal = useUnit($additionalModal)

  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const handleUpdateAvatar = async (value: FormData) => {
    if (isUpdateAvatarPending) return

    updateAvatar(value)
  }

  const closeCropModule = () => {
    setImageSrc(null)
    closeAdditionalModal()
  }

  const isDisabled =
    user?.username === watch('username') || !isValid || !isDirty

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
    user,
    isLoading,
    setImageSrc,
    control,
    sendForm,
    isDisabled,
  }
}

export { useProfile }
