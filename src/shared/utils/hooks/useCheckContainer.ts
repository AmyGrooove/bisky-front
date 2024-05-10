import { useEffect, useState } from "react"

const useCheckContainer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth > 2560 ? "QHD" : screenWidth > 1920 ? "fullHD" : "HD"
}

export { useCheckContainer }
