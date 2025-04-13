import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TUseMutationOptions } from '@shared/types'

import { IAddAnimesToShikiBanListRequest } from '../types/IAddAnimesToShikiBanListRequest'

import { addAnimesToShikiBanList } from './addAnimesToShikiBanList'

const useAddAnimesToShikiBanList = (
  options: TUseMutationOptions<typeof addAnimesToShikiBanList> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: (body: IAddAnimesToShikiBanListRequest) =>
      addAnimesToShikiBanList(body),
    onSuccess: async () => {
      queryClient.clear()
    },
  })
}

export { useAddAnimesToShikiBanList }
