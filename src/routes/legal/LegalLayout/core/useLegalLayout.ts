import { ILegalLayoutProps } from '../types/ILegalLayoutProps'

const useLegalLayout = async (props: ILegalLayoutProps) => {
  const { children } = props

  return { children }
}

export { useLegalLayout }
