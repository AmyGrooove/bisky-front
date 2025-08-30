let lockCount = 0
let applied = false
let prevOverflow = ''
let prevMarginRight = ''

const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth

const applyLock = () => {
  if (applied) return
  const doc = document.documentElement
  prevOverflow = doc.style.overflow
  prevMarginRight = doc.style.marginRight

  const width = getScrollbarWidth()
  doc.style.overflow = 'hidden'
  doc.style.marginRight = width > 0 ? `${width}px` : ''
  applied = true
}

const removeLock = () => {
  if (!applied) return
  const doc = document.documentElement
  doc.style.overflow = prevOverflow
  doc.style.marginRight = prevMarginRight
  applied = false
}

const acquireScrollLock = () => {
  lockCount += 1
  if (lockCount === 1) applyLock()
}

const releaseScrollLock = () => {
  if (lockCount > 0) lockCount -= 1
  if (lockCount === 0) removeLock()
}

export { acquireScrollLock, releaseScrollLock }
