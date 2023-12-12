import { useResize } from '../../hooks'
import { Button, ImageItem, Input, List } from '../UI'
import { notesData } from '../../mockData/notesDate'
import { EIcons, Icon } from '..'

import styles from './imageList.module.css'

interface IImageList
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const ImageList = ({ className }: IImageList) => {
  const screenType = useResize()

  return (
    <div className={className}>
      {screenType !== 'desktop' ? (
        <div className={styles.image_wrapper}>
          <img className={styles.image} src='./image/image.png' alt='Фон' />
        </div>
      ) : (
        <>
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
              <li key={item.id} className={styles.item}>
                <ImageItem src={item.foto} className={styles.photo} />
              </li>
            ))}
          </List>
        </>
      )}
    </div>
  )
}
