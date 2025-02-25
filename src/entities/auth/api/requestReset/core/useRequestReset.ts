import { useMutation } from '@tanstack/react-query'
import { requestReset } from './requestReset'
import { IRequestResetRequest } from '../types/IRequestResetRequest'

const useRequestReset = () => {
  return useMutation({
    mutationFn: (body: IRequestResetRequest) => requestReset(body),
  })
}

export { useRequestReset }
