import { CrossIcon } from '@shared/icons'
import { cn, isNil } from '@shared/utils/functions'

import { IModalSolutionProps } from '../../types/IModalSolutionProps'

import st from './DesktopModal.module.scss'
import { useDesktopModal } from './useDesktopModal'

const DesktopModal = (props: IModalSolutionProps) => {
  const { children, closeFunction, isModalClosing, modalID } =
    useDesktopModal(props)

  if (isNil(children)) return null

  return (
    <div
      id={modalID}
      className={cn(st.root, { [st[`root_closing`]]: isModalClosing })}
    >
      <div className={st.background} onClick={closeFunction} />
      <div className={st.modal}>
        {children}
        <button onClick={closeFunction} className={st.closeButton}>
          <CrossIcon className={st.closeIcon} />
        </button>
      </div>
    </div>
  )
}

export { DesktopModal }
