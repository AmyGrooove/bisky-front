import { forwardRef, memo, useImperativeHandle } from 'react'
import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { FloatingPortal } from '@floating-ui/react'

import { IHintMenuProps } from '../types/IHintMenuProps'
import { IHintMenuRef } from '../types/IHintMenuRef'

import { useHintMenu } from './useHintMenu'
import st from './HintMenu.module.scss'

const HintMenu = memo(
  forwardRef<IHintMenuRef, IHintMenuProps>((props, ref) => {
    const {
      items,
      children,
      refs,
      isMounted,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      className,
      open,
      close,
      handleItemClick,
      transitionStyles,
      done,
    } = useHintMenu(props)

    useImperativeHandle(ref, () => ({ open, close }))

    return (
      <>
        <span
          {...getReferenceProps({
            onClick: (event) => {
              event.preventDefault()
              setTimeout(() => done(true), 0)
            },
          })}
          ref={refs.setReference}
          className={className}
        >
          {children}
        </span>
        {isMounted && (
          <FloatingPortal>
            <div
              {...getFloatingProps({
                onClick: (event) => {
                  event.preventDefault()
                  setTimeout(() => done(true), 0)
                },
              })}
              ref={refs.setFloating}
              style={{ ...floatingStyles, ...transitionStyles }}
              className={st.hintWrapper}
            >
              {items.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={handleItemClick(item)}
                  className={cn(st.menuItem, {
                    [st.menuItem_selected]: !!item.isSelected,
                  })}
                >
                  <div className={st.labelWrapper}>
                    {item.IconLeft && <item.IconLeft className={st.icon} />}
                    <Text className={st.text} weight="700">
                      {item.text}
                    </Text>
                  </div>
                  {item.IconRight && <item.IconRight className={st.icon} />}
                </button>
              ))}
            </div>
          </FloatingPortal>
        )}
      </>
    )
  }),
)

HintMenu.displayName = 'HintMenu'

export { HintMenu }
