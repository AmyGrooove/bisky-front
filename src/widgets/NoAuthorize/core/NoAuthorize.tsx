import { Button } from '@shared/ui/molecules/Button'
import { INoAuthorizeProps } from '../types/INoAuthorizeProps'
import { useNoAuthorize } from './useNoAuthorize'
import { setAdditionalModal } from '@widgets/ModalWrapper'
import { AuthModule } from '@widgets/AuthModule'

const NoAuthorize = (props: INoAuthorizeProps) => {
  const { createNewProfile } = useNoAuthorize(props)

  return (
    <>
      В разработке
      <Button onClick={createNewProfile}>Новый аккаунт</Button>
      <Button onClick={() => setAdditionalModal(<AuthModule />)}>
        Авторизация
      </Button>
    </>
  )
}

export { NoAuthorize }
