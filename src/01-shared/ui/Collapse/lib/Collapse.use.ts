import { useEffect, useRef, useState } from "react"

const useCollapse = (numberOfLines: number, lineHeight: number) => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMore = () => {
    setIsExpanded((prev) => !prev)
  }

  useEffect(() => {
    if (
      containerRef.current &&
      containerRef.current.scrollHeight > numberOfLines * lineHeight
    ) {
      setShowButton((prev) => !prev)
    }
  }, [])

  return {
    containerRef,
    isExpanded,
    showButton,
    handleMore,
  }
}

export { useCollapse }
