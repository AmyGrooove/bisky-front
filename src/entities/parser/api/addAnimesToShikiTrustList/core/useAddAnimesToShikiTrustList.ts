import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TUseMutationOptions } from '@shared/types'

import { IAddAnimesToShikiTrustListRequest } from '../types/IAddAnimesToShikiTrustListRequest'

import { addAnimesToShikiTrustList } from './addAnimesToShikiTrustList'

const useAddAnimesToShikiTrustList = (
  options: TUseMutationOptions<typeof addAnimesToShikiTrustList> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: (body: IAddAnimesToShikiTrustListRequest) =>
      addAnimesToShikiTrustList(body),
    onSuccess: async () => {
      queryClient.clear()
    },
  })
}

export { useAddAnimesToShikiTrustList }
