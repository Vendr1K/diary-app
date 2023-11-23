import { useEffect, useState } from 'react'

export const useAnimationModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRendered, setIsRendered] = useState<boolean>(false)

  const handleClose = () => {
    setIsRendered(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  useEffect(() => {
    const closeByESC = (e: KeyboardEvent) => {
      if (isOpen && e.key === ('Escape' || 'Esc')) {
        handleClose()
      }
    }
    window.addEventListener('keydown', closeByESC)
    return () => window.removeEventListener('keydown', closeByESC)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true)
    }
  }, [isOpen])

  return {
    isOpen,
    isRendered,
    setIsOpen,
    handleClose
  }
}
