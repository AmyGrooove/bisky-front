import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addAnimesToShikiBanList } from './addAnimesToShikiBanList'
import { IAddAnimesToShikiBanListRequest } from '../types/IAddAnimesToShikiBanListRequest'

const useAddAnimesToShikiBanList = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IAddAnimesToShikiBanListRequest) =>
      addAnimesToShikiBanList(body),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['anime'] })
    },
  })
}

export { useAddAnimesToShikiBanList }
