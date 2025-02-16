import { createEvent, createStore, sample } from 'effector'
import { ReactNode } from 'react'

const setAdditionalModal = createEvent<ReactNode>()
const closeAdditionalModal = createEvent()
const completeAnimation = createEvent()

const $additionalModal = createStore<ReactNode | null>(null)
  .on(setAdditionalModal, (_, newModal) => newModal)
  .reset(completeAnimation)

const $isAdditionalModalClosing = createStore(false)
  .on(closeAdditionalModal, () => true)
  .reset(setAdditionalModal, completeAnimation)

sample({
  clock: closeAdditionalModal,
  fn: () => setTimeout(completeAnimation, 250),
})

export {
  setAdditionalModal,
  closeAdditionalModal,
  $additionalModal,
  $isAdditionalModalClosing,
}
