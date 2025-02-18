'use client'

import { useEffect, useRef, useState } from 'react'

import { MOBILE_BREAKPOINT } from '../static/MOBILE_BREAKPOINT'

const useDeviceType = () => {
  const isLoading = useRef(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateDeviceType = () => {
      isLoading.current = false
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    updateDeviceType()

    window.addEventListener('resize', updateDeviceType)
    return () => window.removeEventListener('resize', updateDeviceType)
  }, [])

  return { isMobile, isDesktop: !isMobile, isLoading: isLoading.current }
}

export { useDeviceType }
