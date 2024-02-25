import React, { ReactNode } from 'react'
import styles from './heading.module.css'
import { clsx } from 'clsx'

type HeadingProps = {
  children: ReactNode,
  variant: 'alfa' | 'bravo',
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

function Heading({ children, variant, as: Tag }: HeadingProps) {
  const headingStyles = clsx(styles.shared, styles[variant])

  return <Tag className={headingStyles}>{children}</Tag>
}

export { Heading }
