import { Text } from '@shared/ui/atoms'
import { cn } from '@shared/utils/functions'

import { IHintProps } from '../types/IHintProps'

import { useHint } from './useHint'
import st from './Hint.module.scss'


const Hint = (props: IHintProps) => {
  const {
    children,
    hintChildren,
    refs,
    isHintOpen,
    isHintClosing,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    className,
    hintChildrenClassName,
  } = useHint(props)

  return (
    <div {...getReferenceProps()} ref={refs.setReference} className={className}>
      {isHintOpen && hintChildren && (
        <>
          {typeof hintChildren === 'string' ? (
            <Text
              {...getFloatingProps()}
              ref={refs.setFloating}
              style={{ ...floatingStyles }}
              className={cn(st.hintWrapper, {
                [st.hintWrapper_hide]: isHintClosing,
              })}
            >
              {hintChildren}
            </Text>
          ) : (
            <div
              {...getFloatingProps()}
              ref={refs.setFloating}
              style={{ ...floatingStyles }}
              className={cn(st.hintWrapper, hintChildrenClassName, {
                [st.hintWrapper_hide]: isHintClosing,
              })}
            >
              {hintChildren}
            </div>
          )}
        </>
      )}
      {children}
    </div>
  )
}

export { Hint }
