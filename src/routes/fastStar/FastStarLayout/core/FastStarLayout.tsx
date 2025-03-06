import { IFastStarLayoutProps } from '../types/IFastStarLayoutProps'

const FastStarLayout = async (props: IFastStarLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export { FastStarLayout }
