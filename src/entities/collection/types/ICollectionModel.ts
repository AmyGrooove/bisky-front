type TCollectionType = 'franchise' | 'official' | 'genre' | 'studio' | 'custom'

interface ICollectionModel {
  _id: string
  name: string
  poster: string | null
  description: string | null
  author: string | null
  isPublic: boolean
  type: TCollectionType
  views: number
  updatedAt: string
  createdAt: string
  slug: string
  tags: string[]
}

export type { ICollectionModel }
