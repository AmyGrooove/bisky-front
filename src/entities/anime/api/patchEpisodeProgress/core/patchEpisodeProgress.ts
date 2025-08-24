import { createPostFetcher } from '@shared/utils/functions'

import { IPatchEpisodeProgressBody } from '../types/IPatchEpisodeProgressBody'

const patchEpisodeProgress = createPostFetcher('/anime/episode/{ID}', 'PATCH')
const patchEpisodeProgressAdapter = ({
  body,
  episodeID,
}: {
  body: IPatchEpisodeProgressBody
  episodeID: string
}) => patchEpisodeProgress({ params: { ID: episodeID }, optionsPost: { body } })

export { patchEpisodeProgressAdapter as patchEpisodeProgress }
