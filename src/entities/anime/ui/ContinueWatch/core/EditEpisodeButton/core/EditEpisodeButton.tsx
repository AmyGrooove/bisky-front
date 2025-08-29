'use client'

import { memo } from 'react'
import { EllipsisIcon } from '@shared/icons'
import { Button } from '@shared/ui/molecules/Button'
import { HintMenu } from '@shared/ui/molecules/HintMenu'
import { ProgressBar } from '@shared/ui/atoms/ProgressBar'

import { IEditEpisodeButtonProps } from '../types/IEditEpisodeButtonProps'

import { useEditEpisodeButton } from './useEditEpisodeButton'
import st from './EditEpisodeButton.module.scss'

const EditEpisodeButton = memo((props: IEditEpisodeButtonProps) => {
  const {
    buttonClassName,
    progressBarClassName,
    variant,
    hintOptions,
    episodeProgressData,
    currentProgress,
  } = useEditEpisodeButton(props)

  return (
    <>
      <HintMenu
        items={hintOptions}
        className={buttonClassName}
        placement="bottom"
      >
        <Button className={st.button} variant={variant} Icon={EllipsisIcon} />
      </HintMenu>
      <ProgressBar
        height={variant === 'big' ? 8 : 4}
        className={progressBarClassName}
        progress={currentProgress}
        max={episodeProgressData.duration ?? 0}
      />
    </>
  )
})

EditEpisodeButton.displayName = 'EditEpisodeButton'

export { EditEpisodeButton }
