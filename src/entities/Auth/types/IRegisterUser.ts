import { ILoginUser } from "./ILoginUser"

interface IRegisterUser extends ILoginUser {
  email: string
}

export type { IRegisterUser }
