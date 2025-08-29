import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { ChevronDownIcon } from '@shared/icons'
import { forwardRef, memo } from 'react'

import { IPageLinkProps } from '../types/IPageLinkProps'

import { usePageLink } from './usePageLink'
import st from './PageLink.module.scss'

const PageLink = memo(
  forwardRef<HTMLButtonElement, IPageLinkProps>((props, ref) => {
    const {
      children,
      Icon,
      className,
      isSelected,
      isChevronEnabled,
      variant,
      onClick,
      isAlwaysHovered,
    } = usePageLink(props)

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          st.root,
          className,
          { [st.root_alwaysHovered]: isAlwaysHovered },
          { [st.root_selected]: isSelected },
          { [st.root_chevron]: isChevronEnabled },
          st[`root_${variant}`],
        )}
      >
        {!isNil(Icon) && <Icon className={st.icon} />}
        <Text
          weight={variant === 'header' ? '700' : '400'}
          className={st.label}
        >
          {children}
        </Text>
        {isChevronEnabled && (
          <ChevronDownIcon className={cn(st.icon, st.icon_chevron)} />
        )}
      </button>
    )
  }),
)

PageLink.displayName = 'PageLink'

export { PageLink }
