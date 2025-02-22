'use client'

import { BigButton } from '@shared/ui/molecules/BigButton'
import { IAnimeSectionProps } from '../../../types/IAnimeSectionProps'
import st from './ListButtons.module.scss'
import { useListButtons } from './useListButtons'

const ListButtons = (props: IAnimeSectionProps) => {
  const { estimateButton, scoreButton, favoriteButton } = useListButtons(props)

  return (
    <div className={st.root}>
      <BigButton {...estimateButton} />
      <BigButton {...scoreButton} />
      <BigButton {...favoriteButton} />
    </div>
  )
}

export { ListButtons }
