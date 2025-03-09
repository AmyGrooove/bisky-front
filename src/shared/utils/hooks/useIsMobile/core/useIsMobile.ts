import { useLayoutEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  const checkIsMobile = () => {
    const isMobileWidth = window.innerWidth < 1024
    const userAgent = navigator.userAgent
    const isMobileDevice = /android|iphone|ipad|ipod/i.test(userAgent)

    setIsMobile(isMobileWidth || isMobileDevice)
  }

  useLayoutEffect(() => {
    checkIsMobile()

    window.addEventListener('resize', checkIsMobile)
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return isMobile
}

export { useIsMobile }
