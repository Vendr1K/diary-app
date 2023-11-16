import { HTMLAttributes } from 'react'
import styles from './layout.module.css'

export const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={styles.container}>{children}</div>
}
