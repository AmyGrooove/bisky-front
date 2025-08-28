import { cn } from '@shared/utils/functions'

import { ISkeletonSectionLabelProps } from '../../types/TSkeletonProps'

import st from './SkeletonSectionLabel.module.scss'

const SkeletonSectionLabel = (props: ISkeletonSectionLabelProps) => {
  const { variant, className, isLinkEnabled = false } = props

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <div className={st.label} />
      {isLinkEnabled && <div className={st.label} />}
    </div>
  )
}

export { SkeletonSectionLabel }
