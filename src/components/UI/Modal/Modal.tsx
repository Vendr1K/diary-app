import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useClickOutside } from '../../../hooks'

import styles from './modal.module.css'

interface IModal
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean
  isRendered: boolean
  handleClose: () => void
}

export function Modal({ children, isRendered, handleClose }: IModal) {
  const node = document.querySelector('#modal')
  const ref = useClickOutside(() => {
    handleClose()
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!node) return null
  return ReactDOM.createPortal(
    <div className={`${styles.modalScreen} ${isRendered ? styles.active : ''}`}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent} ref={ref}>
          {children}
        </div>
      </div>
    </div>,
    node
  )
}
