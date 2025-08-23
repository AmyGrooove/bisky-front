interface IDubClubModel {
  _id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  tags: string[]
  logo: string | null
}

export type { IDubClubModel }
