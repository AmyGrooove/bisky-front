import { Text } from '@shared/ui/atoms/Text'
import { FloatingPortal } from '@floating-ui/react'
import Link from 'next/link'
import { memo } from 'react'

import { IToolsMenuProps } from '../types/IToolsMenuProps'
import { TOOLS } from '../static/TOOLS'

import { useToolsMenu } from './useToolsMenu'
import st from './ToolsMenu.module.scss'

const ToolsMenu = memo((props: IToolsMenuProps) => {
  const {
    children,
    refs,
    isMounted,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    transitionStyles,
  } = useToolsMenu(props)

  return (
    <>
      <div {...getReferenceProps()} ref={refs.setReference}>
        {children}
      </div>
      {isMounted && (
        <FloatingPortal>
          <div
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...transitionStyles }}
            className={st.toolWrapper}
          >
            {TOOLS.map((tool) => (
              <Link key={tool.label} href={tool.href} className={st.tool}>
                <div className={st.toolLabel}>
                  <div className={st.icon}>{tool.Icon}</div>
                  <Text weight="700" className={st.label}>
                    {tool.label}
                  </Text>
                </div>
                <Text className={st.description}>{tool.description}</Text>
              </Link>
            ))}
          </div>
        </FloatingPortal>
      )}
    </>
  )
})

ToolsMenu.displayName = 'ToolsMenu'

export { ToolsMenu }
