import { IMenuLayoutProps } from '../types/IMenuLayoutProps'

const useMenuLayout = async (props: IMenuLayoutProps) => {
  const { children } = props

  return { children }
}

export { useMenuLayout }
