import { dataFormat } from '../../utils/dataFormat'
import { NoteItemModal } from '../NoteItemModal'
import { useAnimationModal } from '../../hooks'
import { Modal } from '../UI'

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
        <div className={styles.icon}>{emoji}</div>
        <div className={styles.content_wrapper}>
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.date}>{dataFormat(date)}</span>
          </div>
          <p className={styles.text_content}>{note}</p>
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
            date={dataFormat(date)}
            foto={foto}
            emoji={emoji}
            handleClose={handleClose}
          />
        </Modal>
      )}
    </>
  )
}
