import { Button, Input, List } from '../UI'
import { notesData } from '../../mockData/notesDate'
import { EIcons, Icon, ImageItem } from '..'

import styles from './imageList.module.css'

interface IImageList
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  handleClose: () => void
  isModal?: boolean
}

export const ImageList = ({ handleClose, isModal, className }: IImageList) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.search_wrapper}>
        <Input className={styles.input} type='search' placeholder='Поиск' />
        <Button className={styles.search} primary>
          <div className={styles.search_svg}>
            <Icon name={EIcons.search} />
          </div>
        </Button>
      </div>
      <List className={styles.list}>
        {notesData.map(item => (
          <ImageItem
            key={item.id}
            fotoLoad={item.foto}
            handleClose={handleClose}
            isModal={isModal ?? false}
          />
        ))}
      </List>
    </div>
  )
}
