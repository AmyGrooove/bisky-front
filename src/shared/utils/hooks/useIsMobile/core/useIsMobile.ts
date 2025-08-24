import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  const query = '(max-width: 1024px)'

  useEffect(() => {
    const media = window.matchMedia(query)

    const update = () => setIsMobile(media.matches)
    update()

    media.addEventListener('change', update)
    return () => {
      media.removeEventListener('change', update)
    }
  }, [])

  return { isMobile }
}

export { useIsMobile }
