import { forwardRef, useImperativeHandle } from 'react'
import { IHintMenuProps } from '../types/IHintMenuProps'
import { useHintMenu } from './useHintMenu'
import st from './HintMenu.module.scss'
import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { IHintMenuRef } from '../types/IHintMenuRef'
import { FloatingPortal } from '@floating-ui/react'

const HintMenu = forwardRef<IHintMenuRef, IHintMenuProps>((props, ref) => {
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
  } = useHintMenu(props)

  useImperativeHandle(ref, () => ({ open, close }))

  return (
    <>
      <span
        {...getReferenceProps()}
        ref={refs.setReference}
        className={className}
      >
        {children}
      </span>
      {isMounted && (
        <FloatingPortal>
          <div
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...transitionStyles }}
            className={st.hintWrapper}
            role="menu"
          >
            {items.map((item, index) => (
              <button
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
})

HintMenu.displayName = 'HintMenu'

export { HintMenu }
