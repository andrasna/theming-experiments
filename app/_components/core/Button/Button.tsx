import React, { ReactNode } from 'react'
import styles from './Button.module.css'
import { clsx } from 'clsx'

type ButtonProps = {
  children: ReactNode
  variant: string
}

function Button({ children, variant }: ButtonProps) {
  const buttonStyles = clsx(styles.shared, styles[variant])

  return <button className={buttonStyles}>{children}</button>
}

export { Button }
