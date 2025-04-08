import { Button } from '@shared/ui/molecules/Button'
import { setAdditionalModal } from '@widgets/ModalWrapper'
import { AuthModule } from '@widgets/AuthModule'

import { INoAuthorizeProps } from '../types/INoAuthorizeProps'

import { useNoAuthorize } from './useNoAuthorize'

const NoAuthorize = (props: INoAuthorizeProps) => {
  const { createNewProfile, processCallback } = useNoAuthorize(props)

  return (
    <>
      В разработке
      <Button onClick={createNewProfile}>Новый аккаунт</Button>
      <Button
        onClick={() =>
          setAdditionalModal(<AuthModule successCallback={processCallback} />)
        }
      >
        Авторизация
      </Button>
    </>
  )
}

export { NoAuthorize }
