import { useCreateTemporaryProfile } from '@entities/auth/api/createTemporaryProfile'
import { closeModal } from '@widgets/ModalWrapper'
import { useRouter } from 'next/navigation'

import { INoAuthorizeProps } from '../types/INoAuthorizeProps'

const useNoAuthorize = (props: INoAuthorizeProps) => {
  const { thenCallback, thenPushHref } = props

  const { push } = useRouter()

  const { mutateAsync: createTemporaryProfile } = useCreateTemporaryProfile()

  const processCallback = () => {
    setTimeout(() => {
      if (thenCallback) thenCallback()
      if (thenPushHref) push(thenPushHref)
    }, 300)
  }

  const createNewProfile = async () => {
    createTemporaryProfile().then(() => {
      closeModal()

      processCallback()
    })
  }

  return { createNewProfile, processCallback }
}

export { useNoAuthorize }
