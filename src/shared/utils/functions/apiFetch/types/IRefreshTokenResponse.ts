interface IRefreshTokenResponse {
  tokens: {
    accessToken: string
    refreshToken: string
  }
}

export type { IRefreshTokenResponse }
