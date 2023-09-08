import Image from 'next/image'
import classes from '@/app/styles/components/svgIcon.module.scss'

interface Props {
  icon: string
  borderRadius?: string
  isOpenHover?: string
  filled?: boolean
  hoverFilled?: boolean
  customizeClass?: string
  size?: number
  disabled?: boolean
  overallSize?: number
}

export default function SvgIcon(props: Props) {
  const {
    size = 20,
    borderRadius = 'round',
    isOpenHover = true,
    icon = '',
    filled = false,
    customizeClass = '',
    disabled = false,
    overallSize = 40,
  } = props

  return (
    <i
      className={
        `w-10 h-10 flex items-center justify-center cursor-pointer select-none
        ${customizeClass}
        ${disabled ? classes.disabled : ''}
        ${isOpenHover ? classes['open-hover'] : ''}`
      }
      style={{ width: `${overallSize}px`, height: `${overallSize}px` }}
    >
      <Image width={size} height={size} src={`/icons/${props.icon}.svg`} alt="icon"/>
    </i>
  )
}
