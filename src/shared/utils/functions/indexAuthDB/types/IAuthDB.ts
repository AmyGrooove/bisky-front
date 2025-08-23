import { DBSchema } from 'idb'

import { TTokenKey } from './TTokenKey'

interface IAuthDB extends DBSchema {
  tokens: {
    key: TTokenKey
    value: string
  }
}

export type { IAuthDB }
