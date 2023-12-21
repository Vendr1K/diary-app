import { useEffect } from 'react'
import { ImageList } from '..'
import { useAnimationModal, useResize } from '../../hooks'
import { Modal } from '../UI'
import styles from './searchImage.module.css'
import { useNote } from '../../hooks/useNote'

interface ISearchImage
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function SearchImage({ className }: ISearchImage) {
  const screenType = useResize()
  const { isOpen, isRendered, setIsOpen, handleClose } = useAnimationModal()
  const { foto, skipFoto } = useNote()
  useEffect(() => {
    skipFoto()
    handleClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenType])
  return (
    <>
      <div className={className}>
        {screenType !== 'desktop' ? (
          <div className={styles.image_wrapper} onClick={() => setIsOpen(true)}>
            {foto ? (
              <img className={styles.imageCheck} src={foto} alt='Фон' />
            ) : (
              <img className={styles.image} src='./image/image.png' alt='Фон' />
            )}
          </div>
        ) : (
          <ImageList handleClose={handleClose} className={styles.hidden} />
        )}
      </div>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
          isRendered={isRendered}
          className={styles.modal}
        >
          <ImageList handleClose={handleClose} isModal={isOpen} />
        </Modal>
      )}
    </>
  )
}
