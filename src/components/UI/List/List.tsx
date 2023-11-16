import React from 'react'
import styles from './list.module.css'

export const List = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={`${styles.list} ${className}`} {...props}>
      {children}
    </ul>
  )
}
