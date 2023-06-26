import { ButtonHTMLAttributes } from "react"

import { cl } from "@/utils"
import {
  StarOutlineIcon,
  StarFullIcon,
  CheckIcon,
  PlayIcon,
  TrashIcon,
} from "@/components/icons"

import Button from "../Button"

import styles from "./index.module.scss"

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

export default WatchStatusButton
