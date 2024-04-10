import { IUserPublicDataWithTokens } from "../types/IUserPublicDataWithTokens"

declare module "next-auth" {
  interface Session extends IUserPublicDataWithTokens {
    user?: undefined
  }

  interface User extends IUserPublicDataWithTokens {
    id?: undefined
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUserPublicDataWithTokens {
    email: string
  }
}
