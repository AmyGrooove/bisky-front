import { ILegalLayoutProps } from '../types/ILegalLayoutProps'

import st from './LegalLayout.module.scss'
import { useLegalLayout } from './useLegalLayout'

const LegalLayout = async (props: ILegalLayoutProps) => {
  const { children } = await useLegalLayout(props)

  return (
    <>
      <div className={st.root}>{children}</div>
      <div className={st.barMargin} />
    </>
  )
}

export { LegalLayout }
