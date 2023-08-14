"use client"

import { ErrorCard } from "@/04-widgets/ErrorCard"

import styles from "./index.module.scss"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className={styles.errorContainer}>
      <ErrorCard type={"500"} />
    </div>
  )
}

export default Error
