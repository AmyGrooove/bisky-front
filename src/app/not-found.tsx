import ErrorCard from "@/components/Common/ErrorCard"

import styles from "./index.module.scss"

export default function NotFound() {
  return (
    <div className={styles.error404}>
      <ErrorCard type={404} />
    </div>
  )
}
