import { createPostFetcher } from '@shared/utils/functions'

const deleteAnimeUserReaction = createPostFetcher(
  '/anime/{ID}/userReaction',
  'DELETE',
)
const deleteAnimeUserReactionAdapter = ({ animeID }: { animeID: string }) =>
  deleteAnimeUserReaction({ params: { ID: animeID } })

export { deleteAnimeUserReactionAdapter as deleteAnimeUserReaction }
