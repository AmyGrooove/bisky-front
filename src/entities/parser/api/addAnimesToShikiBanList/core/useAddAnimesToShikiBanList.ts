import { useMutation, useQueryClient } from '@tanstack/react-query'

import { IAddAnimesToShikiBanListRequest } from '../types/IAddAnimesToShikiBanListRequest'

import { addAnimesToShikiBanList } from './addAnimesToShikiBanList'

const useAddAnimesToShikiBanList = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IAddAnimesToShikiBanListRequest) =>
      addAnimesToShikiBanList(body),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['genre', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['franchise', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['studio', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({ queryKey: ['anime', 'sitemap'] }),
        queryClient.invalidateQueries({ queryKey: ['franchise', 'sitemap'] }),
        queryClient.invalidateQueries({ queryKey: ['studio', 'sitemap'] }),
        queryClient.invalidateQueries({ queryKey: ['anime', 'allAnimes'] }),
        queryClient.invalidateQueries({ queryKey: ['blocks', 'row'] }),
        queryClient.invalidateQueries({ queryKey: ['blocks'] }),
      ])
    },
  })
}

export { useAddAnimesToShikiBanList }
