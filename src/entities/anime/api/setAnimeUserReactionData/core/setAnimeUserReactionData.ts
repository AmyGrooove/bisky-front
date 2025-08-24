import { createPostFetcher } from '@shared/utils/functions'

import { ISetAnimeUserReactionDataBody } from '../types/ISetAnimeUserReactionDataBody'

const setAnimeUserReactionData = createPostFetcher(
  '/anime/{ID}/userReaction',
  'PATCH',
)
const setAnimeUserReactionDataAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeUserReactionDataBody
}) =>
  setAnimeUserReactionData({ params: { ID: animeID }, optionsPost: { body } })

export { setAnimeUserReactionDataAdapter as setAnimeUserReactionData }
