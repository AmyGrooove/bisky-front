'use client'

import { isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { IDescriptionWrapperProps } from '../types/IDescriptionWrapperProps'

import { useDescriptionWrapper } from './useDescriptionWrapper'
import st from './DescriptionWrapper.module.scss'

const DescriptionWrapper = (props: IDescriptionWrapperProps) => {
  const { description, openDescription } = useDescriptionWrapper(props)

  if (isNil(description)) return description

  return (
    <div className={st.root}>
      <Text maxLines={5}>{description}</Text>
      <div onClick={openDescription}>
        <Text weight="700" className={st.button}>
          Раскрыть...
        </Text>
      </div>
    </div>
  )
}

export { DescriptionWrapper }
