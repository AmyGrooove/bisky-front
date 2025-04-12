interface ILoginByIDResponse {
  tokens: {
    accessToken: 'string'
    refreshToken: 'string'
  }
}

export type { ILoginByIDResponse }
