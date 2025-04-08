import { useRouter } from 'next/navigation'
import { isNil } from '@shared/utils/functions'
import { setModal } from '@widgets/ModalWrapper'
import { useSession } from '@entities/auth/hooks/useSession'

import { NoAuthorize } from '../core/NoAuthorize'
import { ICallNoAuthorizeProps } from '../types/ICallNoAuthorizeProps'

const useCallNoAuthorize = () => {
  const { push } = useRouter()

  const { isError } = useSession()

  const openNoAuthorize = (props: ICallNoAuthorizeProps = {}) => {
    const { thenCallback, thenPushHref, startHref = '/' } = props

    if (!isError) {
      if (thenPushHref) push(thenPushHref)
      if (thenCallback) thenCallback()

      return
    }

    if (!isNil(thenPushHref)) push(startHref)

    setModal(
      <NoAuthorize thenCallback={thenCallback} thenPushHref={thenPushHref} />,
    )
  }

  return openNoAuthorize
}

export { useCallNoAuthorize }
