import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

import { ICurrentUserDataModel } from "../types/ICurrentUserDataModel"

declare module "next-auth" {
  interface Session extends ICurrentUserDataModel {
    user?: undefined
  }

  interface User extends ICurrentUserDataModel {
    id?: undefined
  }
}

declare module "next-auth/jwt" {
  interface JWT extends ICurrentUserDataModel {
    email: string
  }
}
