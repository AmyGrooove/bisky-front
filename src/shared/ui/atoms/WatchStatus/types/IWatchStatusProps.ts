enum Statuses {
  complete = "complete",
  setWatch = "setWatch",
  added = "added",
  watching = "watching",
  dropped = "dropped",
}

type StatusMap = {
  [key in Statuses]: JSX.Element
}

interface IWatchStatusProps {
  status: keyof typeof Statuses
}

export type { IWatchStatusProps, StatusMap }
export { Statuses }
