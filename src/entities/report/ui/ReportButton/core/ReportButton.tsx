'use client'

import { FlagIcon } from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'

import { IReportButtonProps } from '../types/IReportButtonProps'

import st from './ReportButton.module.scss'
import { useReportButton } from './useReportButton'

const ReportButton = (props: IReportButtonProps) => {
  const { variant } = useReportButton(props)

  return (
    <Button
      className={st.reportButton}
      variant={variant}
      Icon={FlagIcon}
      onClick={() => alert('В разработке')}
    />
  )
}

export { ReportButton }
