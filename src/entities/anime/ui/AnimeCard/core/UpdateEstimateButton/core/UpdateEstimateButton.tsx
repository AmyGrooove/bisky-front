'use client'

import { memo } from 'react'
import { EstimateButton } from '@entities/anime/ui/EstimateButton'
import { Button } from '@shared/ui/molecules/Button'
import { EllipsisVerticalIcon } from '@shared/icons'

import { IUpdateEstimateButtonProps } from '../types/IUpdateEstimateButtonProps'

import { useUpdateEstimateButton } from './useUpdateEstimateButton'

const UpdateEstimateButton = memo((props: IUpdateEstimateButtonProps) => {
  const { className, openModal, currentStatus, isEllipsisIcon } =
    useUpdateEstimateButton(props)

  if (isEllipsisIcon)
    return (
      <Button
        onClick={openModal}
        className={className}
        Icon={<EllipsisVerticalIcon />}
        variant="small"
      />
    )

  return (
    <EstimateButton
      type="Button"
      onClick={openModal}
      className={className}
      listStatus={currentStatus}
    />
  )
})

UpdateEstimateButton.displayName = 'UpdateEstimateButton'

export { UpdateEstimateButton }
