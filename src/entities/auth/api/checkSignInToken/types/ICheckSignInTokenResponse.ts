interface ICheckSignInTokenResponse {
  tokens: {
    accessToken: 'string'
    refreshToken: 'string'
  }
}

export type { ICheckSignInTokenResponse }
