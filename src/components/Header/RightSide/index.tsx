import Link from "next/link"

import Button from "@/components/Common/Button"

import styles from "./index.module.scss"

const RightSide = () => {
  return (
    <>
      <Link href="/login">
        <Button className={styles.rightSide__login}>Войти</Button>
      </Link>
    </>
  )
}

export default RightSide
