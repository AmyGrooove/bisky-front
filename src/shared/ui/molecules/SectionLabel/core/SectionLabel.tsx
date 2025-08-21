import { ChevronLeftIcon, EllipsisIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { cn, isNil } from '@shared/utils/functions'
import { forwardRef } from 'react'

import { ISectionLabelProps } from '../types/ISectionLabelProps'

import { useSectionLabel } from './useSectionLabel'
import st from './SectionLabel.module.scss'

const SectionLabel = forwardRef<HTMLDivElement, ISectionLabelProps>(
  (props, ref) => {
    const { children, className, onClickHandler, Icon, additionalOnClick } =
      useSectionLabel(props)

    return (
      <div ref={ref} className={cn(st.root, className)}>
        <ChevronLeftIcon onClick={onClickHandler} className={st.backIcon} />
        <div className={st.labelWrapper}>
          {!isNil(Icon) && <Icon className={st.icon} />}
          <Text className={st.label}>{children}</Text>
        </div>
        <EllipsisIcon
          onClick={additionalOnClick}
          className={cn(st.additionalIcon, {
            [st.additionalIcon_disabled]: isNil(additionalOnClick),
          })}
        />
      </div>
    )
  },
)

SectionLabel.displayName = 'SectionLabel'

export { SectionLabel }
