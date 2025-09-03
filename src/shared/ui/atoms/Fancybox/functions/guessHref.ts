import { ReactElement } from 'react'

const guessHref = (child: ReactElement<any>) => {
  const props: any = child.props ?? {}

  return props.href ?? props.src ?? props['data-src'] ?? null
}

export { guessHref }
