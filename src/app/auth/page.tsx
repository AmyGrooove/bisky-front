import { AuthForm } from "@/components/pages/auth"

import styles from "./index.module.scss"

const Auth = () => {
  return (
    <div className={styles.authContainer}>
      <AuthForm />
    </div>
  )
}

export default Auth
