import { TTokenKey } from '../../indexAuthDB'

interface IApiFetchPostOptions {
  body?: Record<string, unknown>
  tokenType?: TTokenKey
}

export type { IApiFetchPostOptions }
