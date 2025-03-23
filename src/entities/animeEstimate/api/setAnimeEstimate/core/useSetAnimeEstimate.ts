import { useMutation, useQueryClient } from '@tanstack/react-query'
import { setAnimeEstimate } from './setAnimeEstimate'
import { ISetAnimeEstimateRequest } from '../types/ISetAnimeEstimateRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { CassetteTapeIcon } from '@shared/icons'
import { usePathname } from 'next/navigation'

const useSetAnimeEstimate = (isFastFind = false) => {
  const queryClient = useQueryClient()
  const pathname = usePathname()

  return useMutation({
    mutationFn: (body: ISetAnimeEstimateRequest) => setAnimeEstimate(body),
    onSuccess: async (animeID) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', 'fullInfo', animeID],
        }),
        queryClient.invalidateQueries({ queryKey: ['anime', 'fastSelect'] }),
        queryClient.invalidateQueries({ queryKey: ['anime', 'fastStar'] }),
        queryClient.invalidateQueries({
          queryKey: ['genre', 'animes'],
          exact: false,
        }),
        queryClient.invalidateQueries({
          queryKey: ['profile'],
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

      successToast({
        message: 'Статус аниме в списке успешно изменен',
        Icon: CassetteTapeIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${message}`,
      })
    },
  })
}

export { useSetAnimeEstimate }
