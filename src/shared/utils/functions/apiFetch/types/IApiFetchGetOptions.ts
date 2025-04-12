interface IApiFetchGetOptions {
  signal?: AbortSignal
  tokenType?: 'access' | 'refresh'
}

export type { IApiFetchGetOptions }
