import { useEffect, useRef } from 'react'
import styles from './Textarea.module.css'

interface ITextarea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const Textarea = ({ value, ...props }: ITextarea) => {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'inherit'
      ref.current.style.height = `${ref.current.scrollHeight}px`
    }
  }, [value])

  return (
    <textarea
      placeholder='Описание'
      className={styles.textarea}
      ref={ref}
      value={value}
      {...props}
    />
  )
}
