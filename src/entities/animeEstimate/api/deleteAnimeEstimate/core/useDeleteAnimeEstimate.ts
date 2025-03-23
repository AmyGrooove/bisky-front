import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteAnimeEstimate } from './deleteAnimeEstimate'
import { IDeleteAnimeEstimateRequest } from '../types/IDeleteAnimeEstimateRequest'
import { errorToast, successToast } from '@shared/utils/toast'
import { EyeOffIcon } from '@shared/icons'
import { usePathname } from 'next/navigation'

const useDeleteAnimeEstimate = (isFromSkipList = false) => {
  const queryClient = useQueryClient()
  const pathname = usePathname()

  return useMutation({
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

      if (isFromSkipList) return

      await queryClient.invalidateQueries({ queryKey: ['anime', 'fastFind'] })

      successToast({
        message: 'Статус аниме в списке успешно изменен',
        Icon: EyeOffIcon,
      })
    },
    onError: async ({ message }) => {
      errorToast({
        message: `Не удалось изменить статус аниме в списке: ${message}`,
      })
    },
  })
}

export { useDeleteAnimeEstimate }
