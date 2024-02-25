import React, { ReactNode } from 'react'
import styles from './button.module.css'
import { clsx } from 'clsx'

type ButtonProps = {
  children: ReactNode
  variant: 'solid-alfa' | 'solid-bravo' | 'solid-charlie' | 'outline-alfa'
  size?: 'sm' | 'md' | 'lg'
}

function Button({ children, variant, size='md' }: ButtonProps) {
  const buttonStyles = clsx(styles.shared, styles[variant], styles[size])

  return <button className={buttonStyles}>{children}</button>
}

export { Button }
