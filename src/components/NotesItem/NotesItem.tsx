import styles from './notesItem.module.css'
import { dataFormat } from '../../utils/dataFormat'

interface INotesItem extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string
  note: string
  date: string
  foto: string
  emoji: string
}

export const NotesItem = ({ ...props }: INotesItem) => {
  const { title, note, date, foto, emoji } = props

  return (
    <li className={styles.card} style={{ backgroundImage: `url(${foto})` }}>
      <div className={styles.icon}>{emoji}</div>
      <div className={styles.content_wrapper}>
        <div className={styles.title_wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.date}>{dataFormat(date)}</span>
        </div>
        <p className={styles.text_content}>{note}</p>
      </div>
    </li>
  )
}
