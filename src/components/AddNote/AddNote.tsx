import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Form, Input, Select, Textarea } from '../UI'
import { EIcons, Icon, ImageList } from '..'

import styles from './addNote.module.css'

interface IAddNote
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const AddNote = ({ ...props }: IAddNote) => {
  const [textareaValue, setTextareaValue] = useState<string>('')
  const [inputTitle, setInputTitle] = useState<string>('')
  const [inputDate, setInputDate] = useState<string>('')
  const [inputType, setInputType] = useState('text')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(textareaValue, inputTitle, inputDate, isSelected)
  }

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value)
  }

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value)
  }

  const [isSelected, setIsSelected] = useState<JSX.Element | string>(
    <Icon name={EIcons.defaultSmile} width={'19'} height={'19'} />
  )
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
              value={inputTitle}
              onChange={handleChangeTitle}
              className={styles.input}
            />
            <div className={styles.input_bottom_group}>
              <Select
                className={styles.selector}
                isSelected={isSelected}
                options={options}
                setIsSelected={setIsSelected}
              />
              <Input
                placeholder={'Дата'}
                type={inputType}
                value={inputDate}
                onChange={handleChangeDate}
                className={`${styles.input_date} ${styles.input}`}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
          </div>
          <ImageList className={styles.image_list} />
          <div className={styles.area_wrapper}>
            <Textarea value={textareaValue} onChange={handleChangeTextArea} />
            <Button className={styles.button} primary>
              <Icon name={EIcons.pen} className={styles.button_icon} />
              <span className={styles.button_text}>Добавить запись</span>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
