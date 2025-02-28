import { IFastFindLayoutProps } from '../types/IFastFindLayoutProps'

const FastFindLayout = async (props: IFastFindLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export { FastFindLayout }
