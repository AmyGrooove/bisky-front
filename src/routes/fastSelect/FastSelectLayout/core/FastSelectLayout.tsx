import { IFastSelectLayoutProps } from '../types/IFastSelectLayoutProps'

const FastSelectLayout = async (props: IFastSelectLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export { FastSelectLayout }
