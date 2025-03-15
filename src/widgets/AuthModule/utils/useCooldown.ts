import { useState, useEffect } from 'react'

const useCooldown = () => {
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    const cooldownUntil = Number(localStorage.getItem('cooldownUntil')) || 0
    const updateTimer = () => {
      const now = Date.now()
      const diff = Math.max(0, cooldownUntil - now)
      setTimeLeft(diff)

      if (diff === 0) {
        localStorage.removeItem('cooldownUntil')
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  const startCooldown = (durationMs: number) => {
    const cooldownEnd = Date.now() + durationMs
    localStorage.setItem('cooldownUntil', cooldownEnd.toString())
    setTimeLeft(durationMs)
  }

  return { timeLeft, startCooldown }
}

export { useCooldown }
