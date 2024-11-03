import { cn } from "@shared/utils/functions"

import { IPlayerModuleProps } from "../types/IPlayerModuleProps"

import st from "./PlayerModule.module.scss"
import { usePlayerModule } from "./usePlayerModule"

const PlayerModule = (props: IPlayerModuleProps) => {
  const { animeShikiId, isDefaultStyles, className, otherProps } =
    usePlayerModule(props)

  return (
    <iframe
      {...otherProps}
      className={cn(st.root, className, {
        [st.root_defaultStyles]: isDefaultStyles,
      })}
      src={`//kodik.cc/find-player?shikimoriID=${animeShikiId}&BlockedForMe=true&episode=1`}
      width="auto"
      height="auto"
    />
  )
}

export { PlayerModule }
