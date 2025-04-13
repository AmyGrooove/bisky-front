import { useMutation } from '@tanstack/react-query'
import { TUseMutationOptions } from '@shared/types'

import { IRequestResetRequest } from '../types/IRequestResetRequest'

import { requestReset } from './requestReset'

const useRequestReset = (
  options: TUseMutationOptions<typeof requestReset> = {},
) => {
  return useMutation({
    ...options,
    mutationFn: (body: IRequestResetRequest) => requestReset(body),
  })
}

export { useRequestReset }
