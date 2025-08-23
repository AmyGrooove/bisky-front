type TOAuthProvider = 'google' | 'yandex' | 'vk'

type TProtectionStatus = 'full' | 'integration' | 'password' | 'temporary'

type TRoleType = 'admin' | 'moderator' | 'user'

interface ILinkedAccount {
  provider: TOAuthProvider
  providerKey: string
}

interface IUserModel {
  nickname: string
  username: string
  passwordHash: string | null
  email: string | null
  avatar: string | null
  protectionStatus: TProtectionStatus
  role: TRoleType
  temporaryCode: string | null
  createdAt: string
  linkedAccounts: ILinkedAccount[]
  slug: string
}

export type { IUserModel }
