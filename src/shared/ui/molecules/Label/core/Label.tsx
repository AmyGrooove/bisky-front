import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import Link from 'next/link'
import { ChevronRightIcon } from '@shared/icons'

import { ILabelProps } from '../types/ILabelProps'

import st from './Label.module.scss'
import { useLabel } from './useLabel'

const Label = (props: ILabelProps) => {
  const { children, variant, link, className } = useLabel(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <Text weight="700" className={st.label}>
        {children}
      </Text>
      {!isNil(link) ? (
        <Link
          href={link.href}
          className={st.linkWrapper}
          target={link.isOpenInNewPage ? '_blank' : '_self'}
        >
          <Text className={st.linkLabel}>{link.label}</Text>
          <ChevronRightIcon className={st.icon} />
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}

export { Label }
