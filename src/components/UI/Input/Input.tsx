import React from 'react'
import styles from './input.module.css'

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ className, ...props }: IInput) => {
  return (
    <input type='text' className={`${styles.input} ${className}`} {...props} />
  )
}
