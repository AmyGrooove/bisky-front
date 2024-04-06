import { ILoginUser } from "./ILoginUser"

interface ICreateNewUser extends ILoginUser {
  email: string
}

export type { ICreateNewUser }
