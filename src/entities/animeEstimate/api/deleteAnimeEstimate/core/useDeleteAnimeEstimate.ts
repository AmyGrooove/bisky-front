import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { EyeOffIcon } from '@shared/icons'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'
import { usePathname } from 'next/navigation'

import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'

import { deleteAnimeEstimate } from './deleteAnimeEstimate'

const useDeleteAnimeEstimate = (
  isFromSkipList = false,
  options: TUseMutationOptions<typeof deleteAnimeEstimate> = {},
) => {
  const queryClient = useQueryClient()
  const pathname = usePathname()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: IDeleteAnimeEstimateRequest) =>
      deleteAnimeEstimate(body),
    onSuccess: async (animeID) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo', animeID],
        }),
        queryClient.invalidateQueries({ queryKey: ['anime', 'fastSelect'] }),
        queryClient.invalidateQueries({ queryKey: ['anime', 'fastStar'] }),
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username],
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile', user?.username, 'list'],
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
      ])

      if (pathname !== '/') {
        await Promise.all([
          queryClient.invalidateQueries({ queryKey: ['blocks', 'row'] }),
          queryClient.invalidateQueries({ queryKey: ['blocks'] }),
        ])
      }

      if (isFromSkipList) return

      await queryClient.invalidateQueries({ queryKey: ['anime', 'fastFind'] })

      successToast({ message: 'Аниме удалено из списка', Icon: EyeOffIcon })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось удалить аниме из списка: ${message}`,
      })
    },
  })
}

export { useDeleteAnimeEstimate }
