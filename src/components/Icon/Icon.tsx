import { SVGProps } from 'react'
import { DefaultSmile, DropdownArrow, Pen, Logo, Close } from './Icons'

interface IIconProps extends SVGProps<SVGSVGElement> {
  name: EIcons
}

// eslint-disable-next-line react-refresh/only-export-components
export enum EIcons {
  defaultSmile = 'DefaultSmile',
  dropdownArrow = 'DropdownArrow',
  pen = 'Pen',
  logo = 'Logo',
  close = 'Close'
}

export const Icon = (props: IIconProps) => {
  const { width, height, name } = props

  switch (name) {
    case EIcons.defaultSmile:
      return <DefaultSmile width={width} height={height} {...props} />
    case EIcons.dropdownArrow:
      return <DropdownArrow width={width} height={height} {...props} />
    case EIcons.logo:
      return <Logo width={width} height={height} {...props} />
    case EIcons.pen:
      return <Pen width={width} height={height} {...props} />
    case EIcons.close:
      return <Close width={width} height={height} {...props} />

    default:
      return <></>
  }
}
