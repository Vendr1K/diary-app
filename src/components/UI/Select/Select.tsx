import React, { useState } from 'react'
import { useClickOutside } from '../../../hooks'
import { EIcons, Icon } from '../../Icon/Icon'

import styles from './select.module.css'

interface ISelect
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isSelected: string | JSX.Element
  setIsSelected: React.Dispatch<React.SetStateAction<string | JSX.Element>>
  options: string[]
}

export function Select({ isSelected, setIsSelected, options }: ISelect) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside(() => {
    setIsOpen(false)
  })

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleSelected = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLElement)) return
    if (event.target.textContent) {
      setIsOpen(false)
      setIsSelected(event.target.textContent)
    }
  }

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.dropdown__btn} tabIndex={0} onClick={handleOpen}>
        <div className={styles.active__option}>{isSelected}</div>
        <Icon
          name={EIcons.dropdownArrow}
          className={isOpen ? styles.rotateArrow : styles.arrow}
          width={'21'}
          height={'21'}
        />
      </div>
      {isOpen && (
        <div className={styles.dropdown__content}>
          {options.map(item => {
            return (
              <div
                key={item}
                className={styles.dropdown__item}
                onClick={handleSelected}
              >
                {item}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
