import { createEvent, createStore, sample } from 'effector'
import { ReactNode } from 'react'

const setModal = createEvent<ReactNode>()
const closeModal = createEvent()
const completeAnimation = createEvent()

const $modal = createStore<ReactNode | null>(null)
  .on(setModal, (_, newModal) => newModal)
  .reset(completeAnimation)

const $isModalClosing = createStore(false)
  .on(closeModal, () => true)
  .reset(setModal, completeAnimation)

sample({
  clock: closeModal,
  fn: () => setTimeout(completeAnimation, 250),
})

export { setModal, closeModal, $modal, $isModalClosing }
