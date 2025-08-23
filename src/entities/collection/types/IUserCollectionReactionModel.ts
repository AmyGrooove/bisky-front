interface IUserCollectionReactionModel {
  _id: string
  author: string
  collectionID: string
  score: number | null
  isFavorite: boolean
  updatedAt: string
  createdAt: string
}

export type { IUserCollectionReactionModel }
