import React, { useState } from 'react'
import { useClickOutside } from '../../../hooks'
import { EIcons, Icon } from '../../Icon/Icon'
import { Button } from '..'

import styles from './select.module.css'

interface ISelect
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isSelected: string
  setIsSelected: React.Dispatch<React.SetStateAction<string>>
  options: string[]
}

export function Select({
  isSelected,
  setIsSelected,
  options,
  className
}: ISelect) {
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
    <div className={`${styles.dropdown} ${className}`} ref={ref}>
      <Button className={styles.dropdown__btn} onClick={handleOpen}>
        <div className={styles.active__option}>
          {isSelected ? (
            isSelected
          ) : (
            <Icon name={EIcons.defaultSmile} width={'19'} height={'19'} />
          )}
        </div>
        <Icon
          name={EIcons.dropdownArrow}
          className={isOpen ? styles.rotateArrow : styles.arrow}
          width={'21'}
          height={'21'}
        />
      </Button>
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
