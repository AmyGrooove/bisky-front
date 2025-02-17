'use client'

import { useEffect, useState } from 'react'

import { MOBILE_BREAKPOINT } from '../static/MOBILE_BREAKPOINT'

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateDeviceType = () =>
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    updateDeviceType()

    window.addEventListener('resize', updateDeviceType)
    return () => window.removeEventListener('resize', updateDeviceType)
  }, [])

  return { isMobile, isDesktop: !isMobile }
}

export { useDeviceType }
