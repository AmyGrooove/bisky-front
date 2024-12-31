interface IGetCurrentUserDataProps {
  username: string

  animeStatus?: "added" | "completed" | "dropped" | "watching"
  page?: number
}

export type { IGetCurrentUserDataProps }
