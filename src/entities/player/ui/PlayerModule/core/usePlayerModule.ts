import { IPlayerModuleProps } from '../types/IPlayerModuleProps'

const usePlayerModule = (props: IPlayerModuleProps) => {
  const { animeShikiID, className } = props

  const kodikHref = `//kodik.cc/find-player?shikimoriID=${animeShikiID}&BlockedForMe=true&episode=1`

  return { kodikHref, className }
}

export { usePlayerModule }
