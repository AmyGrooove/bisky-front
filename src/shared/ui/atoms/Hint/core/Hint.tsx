import { Text } from '@shared/ui/atoms/Text'
import { cn, isNil } from '@shared/utils/functions'

import { IHintProps } from '../types/IHintProps'

import { useHint } from './useHint'
import st from './Hint.module.scss'

const Hint = (props: IHintProps) => {
  const {
    children,
    hintChildren,
    refs,
    isOpen,
    isClosing,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    className,
    hintChildrenClassName,
  } = useHint(props)

  return (
    <div {...getReferenceProps()} ref={refs.setReference} className={className}>
      {isOpen && !isNil(hintChildren) && (
        <div
          {...getFloatingProps()}
          ref={refs.setFloating}
          style={{ ...floatingStyles }}
          className={cn(st.hintWrapper, hintChildrenClassName, {
            [st.hintWrapper_hide]: isClosing,
          })}
          role="tooltip"
        >
          {typeof hintChildren === 'string' ||
          typeof hintChildren === 'number' ? (
            <Text>{hintChildren}</Text>
          ) : (
            hintChildren
          )}
        </div>
      )}
      {children}
    </div>
  )
}

export { Hint }
