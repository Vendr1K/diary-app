import { HTMLAttributes } from 'react'

interface IForm extends HTMLAttributes<HTMLFormElement> {
  autoComplete?: string
}

export const Form = ({
  children,
  className,
  autoComplete,
  ...props
}: IForm) => {
  return (
    <form className={className} autoComplete={autoComplete} {...props}>
      {children}
    </form>
  )
}
