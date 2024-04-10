import { RefObject, useEffect } from "react"

const useClickOutside = (refs: RefObject<any>[], callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        refs.every((ref) => ref.current && !ref.current.contains(event.target))
      )
        callback()
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [refs, callback])
}

export { useClickOutside }
