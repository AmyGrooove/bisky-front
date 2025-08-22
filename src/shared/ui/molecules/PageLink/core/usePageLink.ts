import { IPageLinkProps } from '../types/IPageLinkProps'

const usePageLink = (props: IPageLinkProps) => {
  const {
    children,
    Icon = null,
    className,
    isSelected = false,
    isChevronEnabled = false,
    variant = 'header',
    onClick,
  } = props

  return {
    children,
    Icon,
    className,
    isSelected,
    isChevronEnabled,
    variant,
    onClick,
  }
}

export { usePageLink }
