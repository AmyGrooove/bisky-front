import Link from 'next/link'

import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms'
import { ChevronRightIcon } from '@shared/icons'

import { ILabelProps } from '../types/ILabelProps'

import { useLabel } from './useLabel'
import st from './Label.module.scss'

const Label = (props: ILabelProps) => {
  const { children, className, linkText, href, variant } = useLabel(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <Text weight="700" size={variant === 'small' ? '20' : '32'}>
        {children}
      </Text>
      {linkText && href && (
        <Link href={href} className={st.linkWrapper}>
          <Text
            size={variant === 'small' ? '16' : '20'}
            isCustomColor
            className={st.linkText}
          >
            {linkText}
          </Text>
          <ChevronRightIcon className={st.icon} />
        </Link>
      )}
    </div>
  )
}

export { Label }
