import React from 'react'
import { EIcons, Icon } from '../Icon'

import styles from './noteItemModal.module.css'
import { Emoji } from '../UI'

interface INotesItem
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  title: string
  note: string
  date: string
  foto: string
  emoji: string
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
      <button className={styles.close_btn} onClick={handleClose}>
        <Icon name={EIcons.close} width={'30'} height={'30'} />
      </button>
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
