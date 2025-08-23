import { TTokenKey } from '../../indexAuthDB'

interface IApiFetchPostOptions {
  body?: Record<string, any>
  tokenType?: TTokenKey
}

export type { IApiFetchPostOptions }
