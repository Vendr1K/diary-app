import { useState } from 'react'
import { PageContext } from '../context'

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false)

  const openNotes = () => setIsNotesOpen(true)
  const openDairy = () => setIsNotesOpen(false)

  return (
    <PageContext.Provider
      value={{
        openNotes,
        openDairy,
        isNotesOpen
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
