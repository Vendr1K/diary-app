import { useState } from 'react'
import { Icon, EIcons } from '../Icon'
import { Logo } from '../Logo'
import { Select, Button, Input } from '../UI'

import styles from './header.module.css'

export function Header() {
  const [isSelected, setIsSelected] = useState<JSX.Element | string>(
    <Icon name={EIcons.defaultSmile} width={'21.97'} height={'21'} />
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
      <Logo href='/' className={styles.logo__margin} />
      <Input className={styles.input} placeholder={'Поиск'} />
      <Select
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        options={options}
      />
      <Button className={styles.button}>
        <Icon name={EIcons.pen} className={styles.button__icon} />
        <span className={styles.button__text}>Добавить запись</span>
      </Button>
    </header>
  )
}
