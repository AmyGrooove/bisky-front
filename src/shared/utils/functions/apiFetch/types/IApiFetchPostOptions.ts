interface IApiFetchPostOptions {
  body?: Record<string, unknown>
  tokenType?: 'access' | 'refresh'
}

export type { IApiFetchPostOptions }
