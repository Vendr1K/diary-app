import styles from './emoji.module.css'

interface IEmoji
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  bigSize?: boolean
  emoji: string | JSX.Element
}

export const Emoji = ({ emoji, bigSize, className }: IEmoji) => {
  return (
    <div
      className={`
        ${styles.wrapper} 
        ${bigSize ? styles.bigSize : ''} 
        ${className}
      `}
    >
      <span
        className={`
        ${styles.emoji} 
        ${bigSize ? styles.bigSize : ''}
      `}
      >
        {emoji}
      </span>
    </div>
  )
}
