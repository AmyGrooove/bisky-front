import { createPostFetcher } from '@shared/utils/functions'

import { ISetAnimeUserStatusBody } from '../types/ISetAnimeUserStatusBody'

const setAnimeUserStatus = createPostFetcher('/anime/{ID}/userStatus', 'POST')
const setAnimeUserStatusAdapter = ({
  animeID,
  body,
}: {
  animeID: string
  body: ISetAnimeUserStatusBody
}) => setAnimeUserStatus({ params: { ID: animeID }, optionsPost: { body } })

export { setAnimeUserStatusAdapter as setAnimeUserStatus }
