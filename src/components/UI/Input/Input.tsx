import React from 'react'
import styles from './input.module.css'

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
}

export const Input = ({ label, className, ...props }: IInput) => {
  return (
    <label className={`${styles.label} ${className}`}>
      {label}
      <input type='text' className={styles.input} {...props} />
    </label>
  )
}
