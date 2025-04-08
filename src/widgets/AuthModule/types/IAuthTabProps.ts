import { IAuthModuleProps } from './IAuthModuleProps'

interface IAuthTabProps extends IAuthModuleProps {
  setNewTab: (value: number) => void
}

export type { IAuthTabProps }
