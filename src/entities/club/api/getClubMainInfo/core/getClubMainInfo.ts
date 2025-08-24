import { createGetFetcher } from '@shared/utils/functions'

import { IGetClubMainInfoResponse } from '../types/IGetClubMainInfoResponse'

const getClubMainInfo = createGetFetcher<IGetClubMainInfoResponse>('/club/{ID}')

export { getClubMainInfo }
