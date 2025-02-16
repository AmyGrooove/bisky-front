import { IModalProps } from '../../types/IModalProps'

const useDesktopModal = (props: IModalProps) => {
  const { children, closeFunction, isModalClosing } = props

  return { children, closeFunction, isModalClosing }
}

export { useDesktopModal }
