import { CrossIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'

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
  } = useMobileModal(props)

  if (!children) return null

  return (
    <div
      className={cn(st.root, {
        [st[`root_closing`]]: isModalClosing,
      })}
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
      <button onClick={closeFunction} className={st.closeButton}>
        <CrossIcon className={st.closeIcon} />
      </button>
    </div>
  )
}

export { MobileModal }
