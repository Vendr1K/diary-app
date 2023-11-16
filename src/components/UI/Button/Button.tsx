import React from 'react'
import styles from './button.module.css'

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({
  children,
  className,
  disabled,
  ...props
}: IButton) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
