'use client'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { ChevronLeftIcon } from '@shared/icons'

import { ISectionLabelProps } from '../types/ISectionLabelProps'

import { useSectionLabel } from './useSectionLabel'
import st from './SectionLabel.module.scss'

const SectionLabel = (props: ISectionLabelProps) => {
  const { children, className, onClickHandler, Icon } = useSectionLabel(props)

  return (
    <div className={cn(st.root, className)}>
      <button onClick={onClickHandler} className={st.backButton}>
        <ChevronLeftIcon className={st.backIcon} />
      </button>
      <div className={st.labelWrapper}>
        {Icon && Icon({ className: st.icon })}
        <Text weight="700" className={st.children}>
          {children}
        </Text>
      </div>
      <div className={st.empty} />
    </div>
  )
}

export { SectionLabel }
