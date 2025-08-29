'use client'

import { memo } from 'react'
import { BigButton } from '@shared/ui/molecules/BigButton'
import { cn } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'

import { IEstimateButtonProps } from '../types/IEstimateButtonProps'

import st from './EstimateButton.module.scss'
import { useEstimateButton } from './useEstimateButton'

const EstimateButton = memo((props: IEstimateButtonProps) => {
  const {
    className,
    currentEstimateData,
    isDisabled,
    listStatus,
    type,
    variant,
    onClick,
  } = useEstimateButton(props)

  if (type === 'Button')
    return (
      <Button
        isDisabled={isDisabled}
        className={cn(className, st[`root_${listStatus}`])}
        variant={variant}
        Icon={currentEstimateData.Icon}
        onClick={onClick}
      />
    )

  return (
    <BigButton
      isDisabled={isDisabled}
      className={cn(st.root, className, st[`root_${listStatus}`])}
      variant={variant}
      Icon={currentEstimateData.Icon}
      onClick={onClick}
    >
      {currentEstimateData.label}
    </BigButton>
  )
})

EstimateButton.displayName = 'EstimateButton'

export { EstimateButton }
