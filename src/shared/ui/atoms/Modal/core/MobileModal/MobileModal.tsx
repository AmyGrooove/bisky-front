import { cn, isNil } from '@shared/utils/functions'

import { IModalSolutionProps } from '../../types/IModalSolutionProps'

import { useMobileModal } from './useMobileModal'
import st from './MobileModal.module.scss'

const MobileModal = (props: IModalSolutionProps) => {
  const {
    children,
    closeFunction,
    isModalClosing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    modalDragStyle,
    modalRef,
    modalID,
  } = useMobileModal(props)

  if (isNil(children)) return null

  return (
    <div
      id={modalID}
      className={cn(st.root, {
        [st[`root_closing`]]: isModalClosing,
      })}
      role="dialog"
      aria-modal="true"
    >
      <div className={st.background} onClick={closeFunction} />
      <div ref={modalRef} className={st.modal} style={modalDragStyle}>
        <div
          className={st.divider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        {children}
      </div>
    </div>
  )
}

export { MobileModal }
