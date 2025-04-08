import { useMutation } from '@tanstack/react-query'

import { IRequestResetRequest } from '../types/IRequestResetRequest'

import { requestReset } from './requestReset'

const useRequestReset = () => {
  return useMutation({
    mutationFn: (body: IRequestResetRequest) => requestReset(body),
  })
}

export { useRequestReset }
