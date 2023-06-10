import Link from "next/link"

import styles from "./index.module.scss"

const RightSide = () => {
  return (
    <>
      <Link href="/login">
        <button>Войти</button>
      </Link>
    </>
  )
}

export default RightSide
