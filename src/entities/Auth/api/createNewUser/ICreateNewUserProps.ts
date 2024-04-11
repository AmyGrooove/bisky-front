import { ILoginUserProps } from "../loginUser/ILoginUserProps"

interface ICreateNewUserProps extends ILoginUserProps {
  email: string
}

export type { ICreateNewUserProps }
