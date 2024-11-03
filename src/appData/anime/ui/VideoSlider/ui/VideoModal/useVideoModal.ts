import { IVideoModalProps } from "../../types/IVideoModalProps"

const useVideoModal = (props: IVideoModalProps) => {
  const { name, url, backUrl } = props

  return { name, url, backUrl }
}

export { useVideoModal }
