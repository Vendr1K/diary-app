import React from 'react'
import { EIcons, Icon } from '../Icon/Icon'

import styles from './logo.module.css'

interface ILogo
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export function Logo({ className, href, ...props }: ILogo) {
  return (
    <a href={href} className={`${styles.logo} ${className}`} {...props}>
      <div className={styles.logo__background}>
        <Icon name={EIcons.logo}  className={styles.icon}/>
      </div>
      <h1 className={styles.title}>Дневник</h1>
    </a>
  )
}
