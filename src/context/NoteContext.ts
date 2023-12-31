import { ChangeEvent, createContext } from 'react'
import { INotesData } from '../mockData/notesDate'

export interface IAddNotes {
  title: string
  note: string
  date: string
  foto: string
  emoji: string
}

interface INoteContext {
  notes: INotesData[]
  title: string
  note: string
  date: string
  foto: string
  emoji: string
  addNotes: ({ title, note, date, foto, emoji }: IAddNotes) => void
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  changeNote: (event: ChangeEvent<HTMLTextAreaElement>) => void
  changeDate: (event: ChangeEvent<HTMLInputElement>) => void
  changeFoto: (event: ChangeEvent<HTMLInputElement>) => void
  setFoto: React.Dispatch<React.SetStateAction<string>>
  setEmoji: React.Dispatch<React.SetStateAction<string>>
  resetNotes: () => void
  skipFoto: () => void
}

export const NoteContext = createContext<INoteContext>({
  notes: [],
  title: '',
  note: '',
  date: '',
  foto: '',
  emoji: '',
  addNotes: () => {},
  changeTitle: () => {},
  changeNote: () => {},
  changeDate: () => {},
  changeFoto: () => {},
  setEmoji: () => {},
  setFoto: () => {},
  resetNotes: () => {},
  skipFoto: () => {}
})
