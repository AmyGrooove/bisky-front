import { TUseMutationOptions } from '@shared/types'
import { createPostFetcher } from '@shared/utils/functions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserIcon } from '@shared/icons'
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
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({ queryKey: [] })])

      successToast({ message: '', Icon: UserIcon })
    },
    onError: async ({ message }) => {
      errorToast({ message: `${message}` })
    },
  })
}

export { useDeleteAnimeUserReaction }
