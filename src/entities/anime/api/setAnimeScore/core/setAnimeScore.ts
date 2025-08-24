import { createPostFetcher } from '@shared/utils/functions'

import { ISetAnimeScoreBody } from '../types/ISetAnimeScoreBody'

const setAnimeScore = createPostFetcher('/anime/{ID}/score', 'POST')
const setAnimeScoreAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeScoreBody
}) => setAnimeScore({ params: { ID: animeID }, optionsPost: { body } })

export { setAnimeScoreAdapter as setAnimeScore }
