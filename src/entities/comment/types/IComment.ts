interface IComment {
  _id: string
  author: string
  baseModel: 'Anime' | 'User' | 'Comment'
  base: string
  parentComment: string | null
  text: string
  createdOn: Date
  updatedOn: Date
}

export type { IComment }
