import { RefObject, Ref, RefCallback } from 'react'

const mergeRefs =
  <T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> =>
  (element) => {
    for (const ref of refs) {
      if (!ref) continue
      if (typeof ref === 'function') {
        ref(element)
      } else {
        ;(ref as RefObject<T | null>).current = element
      }
    }
  }

export { mergeRefs }
