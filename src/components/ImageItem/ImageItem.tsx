import { SyntheticEvent, useState } from 'react'
import { useNote } from '../../hooks/useNote'
import { Image } from '../UI'

import styles from './imageItem.module.css'

interface IImageItem
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  fotoLoad: string
  isModal: boolean
  handleClose: () => void
}

export const ImageItem = ({ fotoLoad, handleClose, isModal }: IImageItem) => {
  const { foto, setFoto, skipFoto } = useNote()
  const [isVertical, setIsVertical] = useState(true)

  const activeFoto = (foto: string, src: string, styles: CSSModuleClasses) => {
    if (foto) {
      return src ? styles.active : styles.opacity
      // return foto === 'http://localhost:5173' + src.slice(1) ? styles.active : styles.opacity
    }
    return ''
  }

  const imgagePosition = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const ratio =
      event.currentTarget.naturalWidth / event.currentTarget.naturalHeight
    setIsVertical(ratio > 1 ? false : true)
  }

  return (
    <li
      className={`
        ${styles.item} 
        ${isModal ? '' : activeFoto(foto, fotoLoad, styles)}
        ${isVertical ? styles.vertical : ''}
      `}
    >
      <Image
        src={fotoLoad}
        className={styles.photo}
        onClick={(event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
          if (!isModal && foto === event.currentTarget.src) {
            skipFoto()
            return
          }
          setFoto(event.currentTarget.src)
          handleClose()
        }}
        onLoad={imgagePosition}
      />
    </li>
  )
}
