import { IGlobalError } from '../types/IGlobalErrorProps'

const useGlobalError = (props: IGlobalError) => {
  const { error, reset } = props

  const errorText = error.message ?? 'Проблемы на сервере'

  return { errorText, reset }
}

export { useGlobalError }
