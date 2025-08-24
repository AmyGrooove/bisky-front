import { createPostFetcher } from '@shared/utils/functions'

import { ISetAnimeFavoriteBody } from '../types/ISetAnimeFavoriteBody'

const setAnimeFavorite = createPostFetcher('/anime/{ID}/favorite', 'POST')
const setAnimeFavoriteAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeFavoriteBody
}) => setAnimeFavorite({ params: { ID: animeID }, optionsPost: { body } })

export { setAnimeFavoriteAdapter as setAnimeFavorite }
