import { NotesItem } from '../NotesItem'
import { List } from '../UI'
import { notesData } from '../../mockData/notesDate'

import styles from './noteList.module.css'

export const NoteList: React.FC = () => {
  return (
    <section className={styles.notes}>
      <List className={styles.list}>
        {notesData.map(item => (
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
