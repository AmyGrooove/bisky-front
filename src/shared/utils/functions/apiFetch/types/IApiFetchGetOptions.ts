import { TTokenKey } from '../../indexAuthDB'

interface IApiFetchGetOptions {
  signal?: AbortSignal
  tokenType?: TTokenKey
}

export type { IApiFetchGetOptions }
