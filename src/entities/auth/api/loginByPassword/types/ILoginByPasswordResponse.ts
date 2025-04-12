interface ILoginByPasswordResponse {
  tokens: {
    accessToken: 'string'
    refreshToken: 'string'
  }
}

export type { ILoginByPasswordResponse }
