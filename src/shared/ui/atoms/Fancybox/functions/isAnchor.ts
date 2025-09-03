import { ReactElement } from 'react'

const isAnchor = (child: ReactElement<any>) =>
  typeof child.type === 'string' && child.type === 'a'

export { isAnchor }
