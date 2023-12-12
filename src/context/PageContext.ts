import { createContext } from 'react'

interface IPageProvider {
  openNotes: () => void
  openDairy: () => void
  isNotesOpen: boolean
}

export const PageContext = createContext<IPageProvider>({
  openNotes: () => {},
  openDairy: () => {},
  isNotesOpen: false
})
