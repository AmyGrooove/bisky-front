import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { ChevronDownIcon } from '@shared/icons'

import { IPageLinkProps } from '../types/IPageLinkProps'

import { usePageLink } from './usePageLink'
import st from './PageLink.module.scss'

const PageLink = (props: IPageLinkProps) => {
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
      onClick={onClick}
      className={cn(
        st.root,
        className,
        { [st.root_alwaysHovered]: isAlwaysHovered },
        { [st.root_selected]: isSelected },
        { [st.root_chevron]: isChevronEnabled },
        st[`root_${variant}`],
      )}
      aria-current={isSelected ? 'page' : undefined}
    >
      {!isNil(Icon) && <Icon className={st.icon} />}
      <Text weight={variant === 'header' ? '700' : '400'} className={st.label}>
        {children}
      </Text>
      {isChevronEnabled && (
        <ChevronDownIcon className={cn(st.icon, st.icon_chevron)} />
      )}
    </button>
  )
}

export { PageLink }
