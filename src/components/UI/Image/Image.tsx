import React from 'react'
import styles from './image.module.css'

interface IImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export const Image = ({ src, alt, className, ...props }: IImage) => {
  return (
    <img
      className={`${styles.image} ${className}`}
      src={src}
      {...props}
      alt={alt ?? 'изображение из галереи'}
    />
  )
}
