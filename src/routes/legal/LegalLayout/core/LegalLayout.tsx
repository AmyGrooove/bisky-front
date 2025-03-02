import { ILegalLayoutProps } from '../types/ILegalLayoutProps'
import st from './LegalLayout.module.scss'

const LegalLayout = async (props: ILegalLayoutProps) => {
  const { children } = props

  return <div className={st.root}>{children}</div>
}

export { LegalLayout }
