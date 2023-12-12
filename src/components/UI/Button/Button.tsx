import React from 'react'
import styles from './button.module.css'

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean
}

export const Button = ({
  children,
  className,
  primary,
  disabled,
  ...props
}: IButton) => {
  return (
    <button
      className={`${primary ? styles.button : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
