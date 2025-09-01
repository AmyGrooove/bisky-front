'use client'

import { memo } from 'react'
import { FlagIcon } from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'

import { IReportButtonProps } from '../types/IReportButtonProps'

import st from './ReportButton.module.scss'
import { useReportButton } from './useReportButton'

const ReportButton = memo((props: IReportButtonProps) => {
  const { variant } = useReportButton(props)

  return (
    <Button
      className={st.root}
      variant={variant}
      Icon={<FlagIcon />}
      onClick={() => alert('В разработке')}
    />
  )
})

ReportButton.displayName = 'ReportButton'

export { ReportButton }
