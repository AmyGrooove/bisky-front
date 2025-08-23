import { DBSchema } from 'idb'

type TTokenKey = 'accessToken' | 'refreshToken' | string

interface IAuthDB extends DBSchema {
  tokens: {
    key: TTokenKey
    value: string
  }
}

export type { IAuthDB, TTokenKey }
