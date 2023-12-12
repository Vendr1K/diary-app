import React from 'react'
import { EIcons, Icon } from '../Icon/Icon'

import styles from './logo.module.css'
import { Button } from '../UI'

interface ILogo
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Logo({ className, ...props }: ILogo) {
  return (
    <Button className={`${styles.logo} ${className}`} {...props}>
      <div className={styles.logo__background}>
        <Icon name={EIcons.logo} className={styles.icon} />
      </div>
      <h1 className={styles.title}>Дневник</h1>
    </Button>
  )
}
