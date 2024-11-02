import { IWatchStatusProps } from "../types/IWatchStatusProps"

const useWatchStatus = (props: IWatchStatusProps) => {
  const { status, className, ...otherProps } = props

  return { status, className, otherProps }
}

export { useWatchStatus }
