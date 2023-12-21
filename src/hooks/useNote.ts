import { useContext } from 'react'
import { NoteContext } from '../context'

export const useNote = () => {
  return useContext(NoteContext)
}
