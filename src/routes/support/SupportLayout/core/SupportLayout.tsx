import { ISupportLayoutProps } from '../types/ISupportLayoutProps'

import { useSupportLayout } from './useSupportLayout'

const SupportLayout = async (props: ISupportLayoutProps) => {
  const { children } = await useSupportLayout(props)

  return <>{children}</>
}

export { SupportLayout }
