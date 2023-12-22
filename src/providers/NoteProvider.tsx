import { useState, useEffect, ChangeEvent } from 'react'
import { NoteContext } from '../context'
import { notesData, TNotesData } from '../mockData/notesDate'
import { IAddNotes } from '../context/NoteContext'

const storage = {
  setItem: (name: string, item: TNotesData) => {
    localStorage.setItem(name, JSON.stringify(item))
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name)
    if (item) {
      return JSON.parse(item)
    }
  }
}

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState(
    storage.getItem('storage-notes') || notesData
  )
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [date, setDate] = useState('')
  const [foto, setFoto] = useState('')
  const [emoji, setEmoji] = useState('')

  const changeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value)
  const changeNote = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setNote(event.target.value)
  const changeDate = (event: ChangeEvent<HTMLInputElement>) =>
    setDate(event.target.value)
  const changeFoto = (event: ChangeEvent<HTMLInputElement>) =>
    setFoto(event.target.value)
  const skipFoto = () => setFoto('')

  const addNotes = ({ title, note, date, foto, emoji }: IAddNotes) => {
    const newNote = {
      id: new Date().toISOString(),
      title: title,
      note: note,
      date: date,
      foto: foto,
      emoji: emoji
    }
    setNotes([...notes, newNote])
  }

  const resetNotes = () => {
    setTitle('')
    setNote('')
    setDate('')
    setFoto('')
    setEmoji('')
  }

  useEffect(() => {
    localStorage.setItem('storage-notes', JSON.stringify(notes))
  }, [notes])

  return (
    <NoteContext.Provider
      value={{
        notes,
        title,
        note,
        date,
        foto,
        emoji,
        addNotes,
        changeTitle,
        changeNote,
        changeDate,
        changeFoto,
        resetNotes,
        skipFoto,
        setEmoji,
        setFoto
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
