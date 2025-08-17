import { ForwardedRef, ReactElement } from 'react'

interface IForwardRefComponent<PropsType> {
  (props: PropsType & { ref?: ForwardedRef<HTMLDivElement> }): ReactElement
  displayName?: string
}

export type { IForwardRefComponent }
