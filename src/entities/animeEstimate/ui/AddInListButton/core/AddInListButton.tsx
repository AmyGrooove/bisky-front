'use client'

import { getEstimateColor } from '@entities/animeEstimate/utils'
import { Button } from '@shared/ui/molecules/Button'
import { cn } from '@shared/utils/functions'

import { IAddInListButtonProps } from '../types/IAddInListButtonProps'

import st from './AddInListButton.module.scss'
import { useAddInListButton } from './useAddInListButton'

const AddInListButton = (props: IAddInListButtonProps) => {
  const { ListIcon, className, currentStatus, openModal } =
    useAddInListButton(props)

  return (
    <Button
      isCustomColor
      variant="big"
      onClick={openModal}
      Icon={ListIcon}
      className={cn(className, st[`root_${getEstimateColor(currentStatus)}`])}
    />
  )
}

export { AddInListButton }
