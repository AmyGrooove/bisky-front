import { useCreateTemporaryProfile } from '@entities/auth/api/createTemporaryProfile'
import { INoAuthorizeProps } from '../types/INoAuthorizeProps'
import { closeModal } from '@widgets/ModalWrapper'
import { useRouter } from 'next/navigation'

const useNoAuthorize = (props: INoAuthorizeProps) => {
  const { thenCallback, thenPushHref } = props

  const { push } = useRouter()

  const { mutateAsync: createTemporaryProfile } = useCreateTemporaryProfile()

  const createNewProfile = async () => {
    createTemporaryProfile().then(() => {
      closeModal()

      setTimeout(() => {
        if (thenCallback) thenCallback()
        if (thenPushHref) push(thenPushHref)
      }, 300)
    })
  }

  return { createNewProfile }
}

export { useNoAuthorize }
