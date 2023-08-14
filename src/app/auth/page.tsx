import { AuthForm } from "@/03-features/authentication/AuthForm"

import styles from "./page.module.scss"

const Page = () => {
  return (
    <div className={styles.authContainer}>
      <AuthForm />
    </div>
  )
}

export default Page
