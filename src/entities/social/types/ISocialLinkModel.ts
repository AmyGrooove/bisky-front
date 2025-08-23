type TSocialLinkBaseType = 'DubPerson' | 'DubClub' | 'User' | 'Anime'

interface ISocialLinkModel {
  baseType: TSocialLinkBaseType
  base: string
  social: string
  url: string
}

export type { ISocialLinkModel }
