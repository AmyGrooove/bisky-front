import { IMenuLayoutProps } from '../types/IMenuLayoutProps'

import { useMenuLayout } from './useMenuLayout'

const MenuLayout = async (props: IMenuLayoutProps) => {
  const { children } = await useMenuLayout(props)

  return <>{children}</>
}

export { MenuLayout }
