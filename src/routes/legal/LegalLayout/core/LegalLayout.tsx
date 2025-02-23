import { ILegalLayoutProps } from '../types/ILegalLayoutProps'

const LegalLayout = async (props: ILegalLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export { LegalLayout }
