import { useState } from 'react'
import { Icon, EIcons } from '../Icon'
import { Logo } from '../Logo'
import { Select, Button, Input } from '../UI'

import styles from './header.module.css'

export function Header() {
  const [isSelected, setIsSelected] = useState<JSX.Element | string>(
    <Icon name={EIcons.defaultSmile} width={'19'} height={'19'} />
  )
  const options = [
    '😌',
    '😊',
    '😄',
    '🤣',
    '😰',
    '🥰',
    '🙃',
    '😔',
    '😇',
    '🤔',
    '😩',
    '😭',
    '😤',
    '😵',
    '🤒',
    '🤤'
  ]

  return (
    <header className={styles.header}>
      <Logo href='/' className={styles.logo} />
      <div className={styles.group}>
        <Input className={styles.input} placeholder={'Поиск'} />
        <Select
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          options={options}
        />
      </div>
      <Button className={styles.button}>
        <Icon name={EIcons.pen} className={styles.button__icon} />
        <span className={styles.button__text}>Добавить запись</span>
      </Button>
    </header>
  )
}
