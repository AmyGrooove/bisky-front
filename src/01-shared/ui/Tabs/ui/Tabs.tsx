"use client"

import {
  Children,
  ReactNode,
  createContext,
  memo,
  useCallback,
  useContext,
  useState,
} from "react"

import { cl } from "@/01-shared/utils"

import styles from "./Tabs.module.scss"

const TabsContext = createContext<{
  activeValue: string
  switchActiveValue: any
}>({
  activeValue: "",
  switchActiveValue: undefined,
})

interface ITabs {
  defaultValue: string
  children: ReactNode

  className?: string
}

const Tabs = ({ defaultValue, children, className }: ITabs) => {
  const [activeValue, setActiveValue] = useState(defaultValue)

  const switchActiveValue = useCallback((value: string) => {
    setActiveValue(value)
  }, [])

  return (
    <TabsContext.Provider value={{ activeValue, switchActiveValue }}>
      <div className={cl(styles.tabs, className)}>{children}</div>
    </TabsContext.Provider>
  )
}

interface ITabsList {
  children: ReactNode

  className?: string
}

Tabs.List = memo(function List({ children, className }: ITabsList) {
  const { activeValue } = useContext(TabsContext)

  const activeTabIndex = Children.toArray(children).findIndex(
    (element, index, array) => {
      // @ts-ignore
      return element.props.value === activeValue
    },
  )
  const sliderWidth = 100 / Children.count(children)

  const sliderPositionClass = (activeValueIndex: number) => {
    const translatePercentage = (sliderWidth * activeValueIndex).toFixed(2)
    return {
      transform: `translateX(${translatePercentage}%) scaleX(${
        sliderWidth / 100
      })`,
    }
  }

  return (
    <ul className={cl(styles.tabs__list, className)}>
      {children}
      <li
        className={styles.tabs__list__slider}
        style={sliderPositionClass(activeTabIndex)}
        role="presentation"
      />
    </ul>
  )
})

interface ITabsTab {
  value: string
  children: ReactNode

  className?: string
}

Tabs.Tab = memo(function Tab({ value, children, className }: ITabsTab) {
  const { activeValue, switchActiveValue } = useContext(TabsContext)

  return (
    <li
      onClick={() => switchActiveValue(value)}
      className={cl(
        styles.tabs__tab,
        activeValue === value ? styles.tabs__tab_active : "",
        className,
      )}
    >
      {children}
    </li>
  )
})

interface ITabsPanel {
  value: string
  children: ReactNode

  className?: string
}

Tabs.Panel = memo(function Panel({ value, children, className }: ITabsPanel) {
  const { activeValue } = useContext(TabsContext)

  return (
    <div
      className={cl(
        styles.tabs__panel,
        activeValue === value ? styles.tabs__panel_active : "",
        className,
      )}
    >
      {children}
    </div>
  )
})

export { Tabs }
