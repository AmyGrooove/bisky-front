"use client"
import ErrorCard from "@/components/Common/ErrorCard"

import styles from "./index.module.scss"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className={styles.error404}>
          <ErrorCard type={"500"} />
        </div>
      </body>
    </html>
  )
}
