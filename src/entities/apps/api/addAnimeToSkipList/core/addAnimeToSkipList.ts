import { createPostFetcher } from '@shared/utils/functions'

import { IAddAnimeToSkipListBody } from '../types/IAddAnimeToSkipListBody'

const addAnimeToSkipList = createPostFetcher('/aniPick/skipList', 'POST')
const addAnimeToSkipListAdapter = (body: IAddAnimeToSkipListBody) =>
  addAnimeToSkipList({ optionsPost: { body } })

export { addAnimeToSkipListAdapter as addAnimeToSkipList }
