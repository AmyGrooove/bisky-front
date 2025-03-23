import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addAnimesToShikiTrustList } from './addAnimesToShikiTrustList'
import { IAddAnimesToShikiTrustListRequest } from '../types/IAddAnimesToShikiTrustListRequest'

const useAddAnimesToShikiTrustList = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: IAddAnimesToShikiTrustListRequest) =>
      addAnimesToShikiTrustList(body),
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

export { useAddAnimesToShikiTrustList }
