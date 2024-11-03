import { IProvidersProps } from "../types/IProvidersProps"

const useProviders = (props: IProvidersProps) => {
  const { children } = props

  return { children }
}

export { useProviders }
