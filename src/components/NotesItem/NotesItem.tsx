import { dataFormat } from '../../utils/dataFormat'
import { NoteItemModal } from '../NoteItemModal'
import { useAnimationModal } from '../../hooks'
import { Emoji, Modal } from '../UI'

import styles from './notesItem.module.css'

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
}

export const NotesItem = ({ ...props }: INotesItem) => {
  const { title, note, date, foto, emoji } = props

  const { isOpen, isRendered, setIsOpen, handleClose } = useAnimationModal()

  return (
    <>
      <li className={styles.card} onClick={() => setIsOpen(true)}>
        <img className={styles.img} src={foto} alt='Фото' />
        <Emoji emoji={emoji} className={styles.icon} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.date}>
            {dataFormat({ date, vissible: 'shrot' })}
          </span>
          <p className={styles.text}>{note}</p>
        </div>
      </li>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
          isRendered={isRendered}
        >
          <NoteItemModal
            title={title}
            note={note}
            date={dataFormat({ date, vissible: 'big' })}
            foto={foto}
            emoji={emoji}
            handleClose={handleClose}
          />
        </Modal>
      )}
    </>
  )
}
