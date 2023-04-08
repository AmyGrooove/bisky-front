import { useRef, useEffect, useState } from "react"

import { LOADING_ICON } from "@/theme/sources"

import AmyImage from "../AmyImage"

import styles from "./index.module.scss"

interface ILoadingIcon {
  func?: () => void
}

const LoadingIcon = ({ func }: ILoadingIcon) => {
  const [check, setCheck] = useState(false)
  const loadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (func) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            func()
            setTimeout(() => {
              setCheck(!check)
            }, 1000)
            observer.unobserve(entry.target)
          }
        })
      })

      if (loadRef.current) {
        observer.observe(loadRef.current)
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [check])

  return (
    <div className={styles.loadingIcon} ref={loadRef}>
      <AmyImage
        src={LOADING_ICON}
        width={70}
        height={70}
        className={styles.loadingIcon__img}
      />
    </div>
  )
}

export default LoadingIcon
