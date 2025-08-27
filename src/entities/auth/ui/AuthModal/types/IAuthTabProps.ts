import { IAuthModalProps } from './IAuthModalProps'

interface IAuthTabProps extends IAuthModalProps {
  setNewTab: (value: number) => void
}

export type { IAuthTabProps }
