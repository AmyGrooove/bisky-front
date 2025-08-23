import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TrashIcon } from '@shared/icons'
import { successToast, errorToast } from '@shared/utils/toast'

const deleteAnimeUserReaction = createPostFetcher(
  '/anime/{ID}/userReaction',
  'DELETE',
)
const deleteAnimeUserReactionAdapter = ({ animeID }: { animeID: string }) =>
  deleteAnimeUserReaction({ params: { ID: animeID } })

const useDeleteAnimeUserReaction = (
  options: TUseMutationOptions<typeof deleteAnimeUserReactionAdapter> = {},
) => {
  const queryClient = useQueryClient()

  return useMutation({
    ...options,
    mutationFn: deleteAnimeUserReactionAdapter,
    onSuccess: async ({ query }) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['anime', query?.ID],
          exact: false,
        }),
        queryClient.invalidateQueries({ queryKey: ['profile'], exact: false }),
        queryClient.invalidateQueries({ queryKey: ['aniPick'] }),
        queryClient.invalidateQueries({ queryKey: ['aniJudge'] }),
        queryClient.invalidateQueries({ queryKey: ['aniBattle'] }),
      ])

      successToast({ message: 'Статус аниме в списке удален', Icon: TrashIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message })
    },
  })
}

export { useDeleteAnimeUserReaction }
