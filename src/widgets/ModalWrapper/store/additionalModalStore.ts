import { createEvent, createStore } from 'effector'
import { ReactNode } from 'react'

const setAdditionalModal = createEvent<ReactNode>()
const closeAdditionalModal = createEvent()

const $additionalModal = createStore<ReactNode | null>(null)
  .on(setAdditionalModal, (_, newModal) => newModal)
  .reset(closeAdditionalModal)

export { setAdditionalModal, closeAdditionalModal, $additionalModal }
