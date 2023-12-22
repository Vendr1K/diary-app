import { useState } from 'react'
import { Logo, Icon, EIcons } from '..'
import { Select, Button, Input } from '../UI'
import { usePage } from '../../hooks'

import styles from './header.module.css'

export function Header() {
  const [isSelected, setIsSelected] = useState<string>('')

  const { openNotes, openDairy, isNotesOpen } = usePage()

  return (
    <header className={styles.header}>
      <Logo onClick={openDairy} className={styles.logo} />
      {!isNotesOpen && (
        <>
          <div className={styles.group}>
            <Input className={styles.input} placeholder={'Поиск'} />
            <Select isSelected={isSelected} setIsSelected={setIsSelected} />
          </div>
          <Button className={styles.button} primary onClick={openNotes}>
            <Icon name={EIcons.pen} className={styles.button__icon} />
            <span className={styles.button__text}>Добавить запись</span>
          </Button>
        </>
      )}
    </header>
  )
}
