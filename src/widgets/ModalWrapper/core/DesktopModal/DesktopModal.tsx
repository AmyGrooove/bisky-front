import { CrossIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'

import { IModalProps } from '../../types/IModalProps'

import st from './DesktopModal.module.scss'
import { useDesktopModal } from './useDesktopModal'

const DesktopModal = (props: IModalProps) => {
  const { children, closeFunction, isModalClosing } = useDesktopModal(props)

  return (
    <>
      {children && (
        <div
          className={cn(st.root, {
            [st[`root_closing`]]: isModalClosing,
          })}
        >
          <div className={st.background} onClick={closeFunction} />
          <div className={st.modal}>{children}</div>
          <button onClick={closeFunction} className={st.closeButton}>
            <CrossIcon className={st.closeIcon} />
          </button>
        </div>
      )}
    </>
  )
}

export { DesktopModal }
