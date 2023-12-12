import React from 'react'
import styles from './imageItem.module.css'

interface IImageItem
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export const ImageItem = ({ src, className }: IImageItem) => {
  return <img className={`${styles.image} ${className}`} src={src} alt='изображение из галереи' />
}
