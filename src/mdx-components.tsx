import st from './mdx-components.module.scss'

import type { MDXComponents } from 'mdx/types'

const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ children }) => <h1 className={st.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={st.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={st.h3}>{children}</h3>,
    ul: ({ children }) => <ul className={st.ul}>{children}</ul>,
    ol: ({ children }) => <ol className={st.ol}>{children}</ol>,
    li: ({ children }) => <li className={st.li}>{children}</li>,
    p: ({ children }) => <p className={st.p}>{children}</p>,
    a: ({ href, children }) => (
      <a href={href} target="_blank" className={st.link}>
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className={st.blockquote}>{children}</blockquote>
    ),
    ...components,
  }
}

export { useMDXComponents }
