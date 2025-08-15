interface IUseSwipeToClose {
  closeFunction: () => void
  isOpen: boolean

  threshold?: number
}

export type { IUseSwipeToClose }
