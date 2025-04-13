import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorToast, successToast } from '@shared/utils/toast'
import { TUseMutationOptions } from '@shared/types'
import { useSession } from '@entities/auth/hooks/useSession'
import { usePathname } from 'next/navigation'

import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'
import { getSuccessStatus } from '../utils/getSuccessStatus'

import { setAnimeEstimate } from './setAnimeEstimate'

const useSetAnimeEstimate = (
  isFastFind = false,
  options: TUseMutationOptions<typeof setAnimeEstimate> = {},
) => {
  const queryClient = useQueryClient()
  const pathname = usePathname()
  const { user } = useSession()

  return useMutation({
    ...options,
    mutationFn: (body: ISetAnimeEstimateRequest) => setAnimeEstimate(body),
    onSuccess: async ({ animeID, estimateVariant }) => {
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

      if (isFastFind) return

      await queryClient.invalidateQueries({ queryKey: ['anime', 'fastFind'] })

      const successStatus = getSuccessStatus(estimateVariant)
      successToast({ message: successStatus.text, Icon: successStatus.Icon })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${message}`,
      })
    },
  })
}

export { useSetAnimeEstimate }
