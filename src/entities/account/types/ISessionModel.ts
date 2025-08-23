interface ISessionModel {
  _id: string
  userID: string
  refreshToken: string
  deviceType: string | null
  loggedAt: string
  location: string | null
}

export type { ISessionModel }
