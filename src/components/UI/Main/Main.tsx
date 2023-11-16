import { HTMLAttributes } from 'react'
import styles from './main.module.css'

export const Main = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <main className={`${styles.main} ${className}`} {...props}>
      {children}
    </main>
  )
}
