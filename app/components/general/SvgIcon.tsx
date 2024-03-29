import React from 'react'
import type { EvtAttributes } from '@/types'
import { isFunction } from '@/app/utils/useChecks'
import svgIcon from '@/app/styles/components/svgIcon.module.scss'

interface Props extends EvtAttributes {
  icon: () => React.JSX.Element
  borderRadius?: string
  isOpenHover?: boolean
  filled?: boolean
  hoverFilled?: boolean
  customizeClass?: string
  size?: number
  disabled?: boolean
  overallSize?: number
  children?: React.JSX.Element
}

export default function SvgIcon(props: Props) {
  const {
    isOpenHover = true,
    icon = () => <></>,
    customizeClass = '',
    disabled = false,
    overallSize = 40,
    children = <></>,
  } = props

  const useFirstIconRef = React.createRef<HTMLElement>()

  return (
    <i
      ref={useFirstIconRef}
      className={`w-10 h-10 flex items-center justify-center cursor-pointer select-none ${customizeClass} ${disabled ? svgIcon.disabled : ''} ${isOpenHover ? svgIcon.open_hover : ''}`}
      style={{ width: `${overallSize}px`, height: `${overallSize}px` }}
      onClick={props.onClick}
    >
      {isFunction(icon) ? icon() : icon}
      {children}
    </i>
  )
}
