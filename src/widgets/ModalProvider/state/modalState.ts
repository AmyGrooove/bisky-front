import { createEvent, createStore } from "effector"
import { ReactNode } from "react"

const setModal = createEvent<ReactNode>()
const closeModal = createEvent()

const $modal = createStore<ReactNode>(null)
  .on(setModal, (_, newModal) => newModal)
  .reset(closeModal)

export { setModal, closeModal, $modal }
