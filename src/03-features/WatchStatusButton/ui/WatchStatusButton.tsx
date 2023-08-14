import { ButtonHTMLAttributes } from "react"

import {
  CheckIcon,
  PlayIcon,
  StarFullIcon,
  StarOutlineIcon,
  TrashIcon,
} from "@/01-shared/ui/icons"
import { Button } from "@/01-shared/ui/Button"
import { cl } from "@/01-shared/utils"

import styles from "./WatchStatusButton.module.scss"

interface IWatchStatusButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "setWatch" | "added" | "complete" | "watching" | "dropped"
  className?: string
}

const WatchStatusButton = ({
  status = "setWatch",
  className,
  ...props
}: IWatchStatusButton) => {
  const SELECT_STATUS_TEXT =
    status === "setWatch" ? (
      <StarOutlineIcon size={20} />
    ) : status === "added" ? (
      <StarFullIcon size={20} />
    ) : status === "complete" ? (
      <CheckIcon size={20} />
    ) : status === "watching" ? (
      <PlayIcon size={20} />
    ) : (
      <TrashIcon size={20} />
    )

  return (
    <Button
      className={cl(
        styles.watchStatusButton,
        styles[`watchStatusButton_${status}`],
        className,
      )}
      {...props}
    >
      {SELECT_STATUS_TEXT}
    </Button>
  )
}

export { WatchStatusButton }
