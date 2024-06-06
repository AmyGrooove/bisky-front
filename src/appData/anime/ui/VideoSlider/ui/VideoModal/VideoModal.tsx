import "@vidstack/react/player/styles/default/theme.css"
import "@vidstack/react/player/styles/default/layouts/video.css"
import { MediaPlayer, MediaProvider } from "@vidstack/react"
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default"

import { IVideoModalProps } from "../../types/IVideoModalProps"

import st from "./VideoModal.module.scss"

const VideoModal = (props: IVideoModalProps) => {
  const { name, url, backUrl } = props

  return (
    <MediaPlayer title={name ?? ""} src={url} className={st.root}>
      <MediaProvider />
      <DefaultVideoLayout thumbnails={backUrl} icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}

export { VideoModal }
