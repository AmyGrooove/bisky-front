import { IPlayerModuleProps } from "../types/IPlayerModuleProps"

import st from "./PlayerModule.module.scss"

const PlayerModule = async (props: IPlayerModuleProps) => {
  const { animeShikiId } = props

  return (
    <iframe
      className={st.root}
      src={`//kodik.cc/find-player?shikimoriID=${animeShikiId}&BlockedForMe=true&episode=1`}
      width="auto"
      height="auto"
    />
  )
}

export { PlayerModule }
