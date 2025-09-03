import { useRef, useEffect, useMemo, Children, isValidElement } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import { isNil } from '@shared/utils/functions'

import { IFancyboxProps } from '../types/IFancyboxProps'
import { guessHref } from '../functions/guessHref'
import { isAnchor } from '../functions/isAnchor'

const useFancybox = (props: IFancyboxProps) => {
  const { children, className, groupName = 'gallery' } = props

  const containerRef = useRef<HTMLDivElement>(null)

  const enhancedChildren = useMemo(() => {
    const list = Children.toArray(children)

    return list.map((node, index) => {
      if (!isValidElement(node)) return node

      if ((node.props as any)?.['data-fancybox-skip']) return node

      if (isAnchor(node) || (node.props as any)?.['data-fancybox']) return node

      const href = guessHref(node)
      if (isNil(href)) return node

      return (
        <a key={node.key ?? index} href={href} data-fancybox={groupName}>
          {node}
        </a>
      )
    })
  }, [children, groupName])

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    NativeFancybox.bind(root, `[data-fancybox="${groupName}"]`, {})

    return () => {
      NativeFancybox.unbind(root)
    }
  }, [groupName, enhancedChildren])

  return { containerRef, children: enhancedChildren, className }
}

export { useFancybox }
