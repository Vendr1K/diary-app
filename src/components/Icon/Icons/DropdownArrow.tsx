import { IIconProps } from './icon.props'

export function DropdownArrow({ className, style, width, height }: IIconProps) {
  return (
    <svg
      className={className ?? ''}
      style={style}
      width={width ?? '20'}
      height={height ?? '20'}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
    >
      <g id='chevron-down'>
        <path
          id='chevron-down_2'
          d='M5.28593 6.46445L4.10742 7.64296L9.99996 13.5355L15.8925 7.64298L14.714 6.46447L9.99998 11.1785L5.28593 6.46445Z'
          fill='#ACACAC'
        />
      </g>
    </svg>
  )
}
