import { ISupportLayoutProps } from '../types/ISupportLayoutProps'

const useSupportLayout = async (props: ISupportLayoutProps) => {
  const { children } = props

  return { children }
}

export { useSupportLayout }
