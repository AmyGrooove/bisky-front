'use client'

import { getEstimateColor } from '@entities/animeEstimate/utils'
import { Button } from '@shared/ui/molecules/Button'
import { setModal } from '@widgets/ModalWrapper'
import { cn, isNil } from '@shared/utils/functions'

import { IAddInListButtonProps } from '../types/IAddInListButtonProps'
import { AddInListModal } from '../../AddInListModal'

import st from './AddInListButton.module.scss'
import { useAddInListButton } from './useAddInListButton'

const AddInListButton = (props: IAddInListButtonProps) => {
  const { ListIcon, _id, className, currentStatus, setCurrentStatus } =
    useAddInListButton(props)

  return (
    <Button
      isCustomColor
      variant="big"
      onClick={(event) => {
        if (isNil(_id) || currentStatus === 'skipped') return

        event.preventDefault()
        setModal(
          <AddInListModal
            selectedListStatus={currentStatus}
            _id={_id}
            setStatus={setCurrentStatus}
          />,
        )
      }}
      Icon={ListIcon}
      className={cn(className, st[`root_${getEstimateColor(currentStatus)}`])}
    />
  )
}

export { AddInListButton }
