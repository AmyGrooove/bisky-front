import ErrorCard from "@/components/Common/ErrorCard"

import styles from "./index.module.scss"

const NotFound = () => {
  return (
    <div className={styles.errorContainer}>
      <ErrorCard type={"404"} />
    </div>
  )
}

export default NotFound
