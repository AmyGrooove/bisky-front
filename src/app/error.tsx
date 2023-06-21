"use client"

import ErrorCard from "@/components/Common/ErrorCard"
import Button from "@/components/Common/Button"

import styles from "./index.module.scss"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className={styles.errorContainer}>
      <ErrorCard type={"500"}>
        <Button onClick={() => reset()}>Повторить</Button>
      </ErrorCard>
    </div>
  )
}

export default Error
