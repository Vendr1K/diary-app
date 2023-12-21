import { FormEvent, useState } from 'react'
import { Button, Form, Input, Select, Textarea } from '../UI'
import { EIcons, Icon, SearchImage } from '..'
import { useNote, usePage } from '../../hooks'

import styles from './addNote.module.css'

interface IAddNote
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const AddNote = ({ ...props }: IAddNote) => {
  const [inputType, setInputType] = useState('text')
  const { openDairy } = usePage()

  const {
    title,
    date,
    emoji,
    note,
    foto,
    changeTitle,
    changeDate,
    setEmoji,
    changeNote,
    addNotes,
    resetNotes
  } = useNote()

  const isValueValid = (value: string) => {
    return !!value
  }
  const isRegFormValid =
    isValueValid(title) &&
    isValueValid(date) &&
    isValueValid(emoji) &&
    isValueValid(note) &&
    isValueValid(foto)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isRegFormValid) {
      return
    }
    addNotes({
      date,
      emoji,
      foto,
      note,
      title
    })
    openDairy()
    resetNotes()
  }

  const options = [
    '😌',
    '😊',
    '😄',
    '🤣',
    '😰',
    '🥰',
    '🙃',
    '😔',
    '😇',
    '🤔',
    '😩',
    '😭',
    '😤',
    '😵',
    '🤒',
    '🤤'
  ]

  const onBlur = () => {
    setInputType('text')
  }

  const onFocus = () => {
    setInputType('date')
  }

  return (
    <div {...props}>
      <Form onSubmit={handleSubmit} autoComplete={'off'}>
        <div className={styles.wrapper}>
          <div className={styles.inputs_wrapper}>
            <Input
              type='text'
              placeholder={'Название'}
              value={title}
              onChange={changeTitle}
              required
              className={styles.input}
            />
            <div className={styles.input_bottom_group}>
              <Select
                className={styles.selector}
                isSelected={emoji}
                options={options}
                setIsSelected={setEmoji}
              />
              <Input
                placeholder={'Дата'}
                type={inputType}
                value={date}
                onChange={changeDate}
                className={`${styles.input_date} ${styles.input}`}
                onFocus={onFocus}
                required
                onBlur={onBlur}
              />
            </div>
          </div>
          <SearchImage className={styles.image_list} />
          <div className={styles.area_wrapper}>
            <Textarea value={note} onChange={changeNote} />
            <Button
              className={styles.button}
              primary
              disabled={!isRegFormValid}
            >
              <Icon name={EIcons.pen} className={styles.button_icon} />
              <span className={styles.button_text}>Добавить запись</span>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
