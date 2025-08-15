import { RefObject, Ref, RefCallback } from 'react'

const mergeRefs =
  <T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> =>
  (element) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(element)
      } else if ('current' in ref) {
        ;(ref as RefObject<T | null>).current = element
      }
    })
  }

export { mergeRefs }
