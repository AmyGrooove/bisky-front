'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'

import { ISettingsLayoutProps } from '../types/ISettingsLayoutProps'

import { useSettingsLayout } from './useSettingsLayout'
import st from './SettingsLayout.module.scss'

const SettingsLayout = (props: ISettingsLayoutProps) => {
  const { isLoading, children } = useSettingsLayout(props)

  if (isLoading)
    return (
      <div className={st.skeleton}>
        <Skeleton templates="none" className={st.label} />
        <div className={st.mainWrapper}>
          <Skeleton templates="none" className={st.menu} />
          <Skeleton
            templates="none"
            className={st.main}
            isFlexShrinkEnabled={false}
          />
        </div>
      </div>
    )

  return <>{children}</>
}

export { SettingsLayout }
