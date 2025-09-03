import { TTokenKey } from '../../indexAuthDB'

interface IApiFetchPostOptions {
  body?: Record<string, any>
  file?: FormData
  tokenType?: TTokenKey
  isEmptyContentType?: boolean
}

export type { IApiFetchPostOptions }
