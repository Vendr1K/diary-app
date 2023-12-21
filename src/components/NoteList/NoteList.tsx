import { NotesItem } from '../NotesItem'
import { List } from '../UI'
import { useNote } from '../../hooks/useNote'

import styles from './noteList.module.css'

export const NoteList: React.FC = () => {
  const { notes } = useNote()
  return (
    <section className={styles.notes}>
      <List className={styles.list}>
        {notes.map(item => (
          <NotesItem
            key={item.id}
            date={item.date}
            foto={item.foto}
            emoji={item.emoji}
            note={item.note}
            title={item.title}
          />
        ))}
      </List>
    </section>
  )
}
