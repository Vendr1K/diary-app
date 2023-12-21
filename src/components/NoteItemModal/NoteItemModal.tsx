import React from 'react'
import { EIcons, Icon } from '..'
import { Button, Emoji } from '../UI'

import styles from './noteItemModal.module.css'

interface INotesItem
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  title: string
  note: string
  date: string
  foto: string
  emoji: string | JSX.Element
  handleClose?: () => void
}

export function NoteItemModal({
  title,
  note,
  date,
  foto,
  emoji,
  handleClose
}: INotesItem) {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <Button className={styles.close_btn} onClick={handleClose}>
        <Icon
          name={EIcons.close}
          className={styles.close_icon}
          width={'30'}
          height={'30'}
        />
      </Button>
      <div className={styles.date}>{date}</div>
      <div className={styles.text}>
        <p className={styles.descr}>{note}</p>
      </div>
      <div className={styles.wrapper}>
        <img src={foto} alt='Фото' className={styles.img} />
        <Emoji className={styles.icon} emoji={emoji} bigSize />
      </div>
    </div>
  )
}
