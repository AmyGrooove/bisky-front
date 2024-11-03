import { IPlayerModuleProps } from "../types/IPlayerModuleProps"

const usePlayerModule = (props: IPlayerModuleProps) => {
  const {
    animeShikiId,
    isDefaultStyles = true,
    className,
    ...otherProps
  } = props

  return { animeShikiId, isDefaultStyles, className, otherProps }
}

export { usePlayerModule }
